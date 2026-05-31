import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PractitionerSearchForm, PractitionerSearchState, SearchResponse, Specialty } from "../types";
import { apiCandidates, getJson, practitionerSearchSchema } from "../api/provider-search";

const initialState: PractitionerSearchState = {
  apiBase: apiCandidates[0] ?? "http://localhost:5223",
  specialties: [],
  clients: [],
  lobs: [],
  planTypes: [],
  providers: [],
  status: "Use the search fields to find a practitioner in your area.",
  loadingOptions: false,
  searching: false,
};

export const loadPractitionerSearchOptions = createAsyncThunk(
  "practitionerSearch/loadOptions",
  async (_, { rejectWithValue }) => {
    for (const candidate of apiCandidates) {
      try {
        const [specialties, clients, lobs, planTypes] = await Promise.all([
          getJson<Specialty[]>(candidate, "/api/provider/specialties"),
          getJson<string[]>(candidate, "/api/provider/client-names"),
          getJson<string[]>(candidate, "/api/provider/lines-of-business"),
          getJson<string[]>(candidate, "/api/provider/plan-types"),
        ]);

        return { apiBase: candidate, specialties, clients, lobs, planTypes };
      } catch {
        continue;
      }
    }

    return rejectWithValue("The provider search service is not available.");
  },
);

export const searchPractitioners = createAsyncThunk(
  "practitionerSearch/search",
  async ({ apiBase, form }: { apiBase: string; form: PractitionerSearchForm }, { rejectWithValue }) => {
    const parsed = practitionerSearchSchema.safeParse(form);

    if (!parsed.success) {
      return rejectWithValue(parsed.error.issues[0]?.message ?? "Please check the search fields.");
    }

    try {
      const response = await fetch(`${apiBase}/api/provider/locations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          planType: form.planType === "default" ? "" : form.planType,
          latitude: 40.7506,
          longitude: -73.9972,
        }),
      });

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      const payload = (await response.json()) as SearchResponse;
      return payload.items;
    } catch {
      return rejectWithValue("An error occurred. Please try again.");
    }
  },
);

const practitionerSearchSlice = createSlice({
  name: "practitionerSearch",
  initialState,
  reducers: {
    clearProviders(state) {
      state.providers = [];
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPractitionerSearchOptions.pending, (state) => {
        state.loadingOptions = true;
      })
      .addCase(loadPractitionerSearchOptions.fulfilled, (state, action) => {
        state.loadingOptions = false;
        state.apiBase = action.payload.apiBase;
        state.specialties = action.payload.specialties;
        state.clients = action.payload.clients;
        state.lobs = action.payload.lobs;
        state.planTypes = action.payload.planTypes;
      })
      .addCase(loadPractitionerSearchOptions.rejected, (state, action) => {
        state.loadingOptions = false;
        state.status = typeof action.payload === "string" ? action.payload : "The provider search service is not available.";
      })
      .addCase(searchPractitioners.pending, (state) => {
        state.searching = true;
      })
      .addCase(searchPractitioners.fulfilled, (state, action) => {
        state.searching = false;
        state.providers = action.payload;
        state.status = action.payload.length
          ? "Practitioners in your area"
          : "We apologize for the inconvenience, we are not locating a practitioner near you. Please contact us at whl@tivityhealth.com and we'll help find a practitioner for you.";
      })
      .addCase(searchPractitioners.rejected, (state, action) => {
        state.searching = false;
        state.providers = [];
        state.status = typeof action.payload === "string" ? action.payload : "An error occurred. Please try again.";
      });
  },
});

export const { clearProviders, setStatus } = practitionerSearchSlice.actions;
export default practitionerSearchSlice.reducer;
