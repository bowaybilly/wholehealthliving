"use client";

import { FormEvent, useEffect, useMemo } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../_store/hooks";
import { loadPractitionerSearchOptions, searchPractitioners } from "../state/practitioner-search-slice";
import { useFindPractitionerStyles } from "../styles/find-a-practitioner";

export function PractitionerSearch() {
  const styles = useFindPractitionerStyles();
  const dispatch = useAppDispatch();
  const { apiBase, clients, lobs, planTypes, providers, searching, specialties, status } = useAppSelector(
    (state) => state.practitionerSearch,
  );

  useEffect(() => {
    dispatch(loadPractitionerSearchOptions());
  }, [dispatch]);

  const resultText = useMemo(() => {
    if (searching) return "Searching...";
    if (providers.length === 0) return status;
    return `${providers.length} practitioner${providers.length === 1 ? "" : "s"} found`;
  }, [providers.length, searching, status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    dispatch(
      searchPractitioners({
        apiBase,
        form: {
          clientDisplayName: String(formData.get("clientDisplayName") ?? ""),
          whlSpecialtyId: String(formData.get("whlSpecialtyId") ?? ""),
          lineOfBusiness: String(formData.get("lineOfBusiness") ?? ""),
          planType: String(formData.get("planType") ?? "default"),
          zipCode: String(formData.get("zipCode") ?? ""),
          mileageRadius: String(formData.get("mileageRadius") ?? "50"),
          practitionerFirstName: String(formData.get("practitionerFirstName") ?? ""),
          practitionerLastName: String(formData.get("practitionerLastName") ?? ""),
        },
      }),
    );
  }

  return (
    <Box component="section" aria-labelledby="results-heading" className={styles.searchGrid}>
      <Paper component="form" variant="outlined" onSubmit={onSubmit} noValidate className={styles.formPaper}>
        <Box className={styles.formFields}>
          <TextField id="clientDisplayName" name="clientDisplayName" label="Health Plan*" select required defaultValue="">
            <MenuItem value="">Choose a Health Plan</MenuItem>
            {clients.map((client) => (
              <MenuItem key={client} value={client}>
                {client}
              </MenuItem>
            ))}
          </TextField>

          <TextField id="whlSpecialtyId" name="whlSpecialtyId" label="Specialty*" select required defaultValue="">
            <MenuItem value="">Choose a Specialty</MenuItem>
            {specialties.map((specialty) => (
              <MenuItem key={specialty.whlSpecialtyId} value={specialty.whlSpecialtyId}>
                {specialty.specialtyName}
              </MenuItem>
            ))}
          </TextField>

          <TextField id="lineOfBusiness" name="lineOfBusiness" label="Line of Business (LOB)*" select required defaultValue="">
            <MenuItem value="">Choose an LOB</MenuItem>
            {lobs.map((lob) => (
              <MenuItem key={lob} value={lob}>
                {lob}
              </MenuItem>
            ))}
          </TextField>

          <TextField id="planType" name="planType" label="Plan Type(optional)" select defaultValue="default">
            <MenuItem value="default">Choose a Plan Type</MenuItem>
            {planTypes.map((planType) => (
              <MenuItem key={planType} value={planType}>
                {planType}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="zipCode"
            name="zipCode"
            label="Zip Code*"
            placeholder="5-digit zip code"
            required
            slotProps={{
              htmlInput: {
                inputMode: "numeric",
                maxLength: 5,
              },
            }}
          />

          <TextField
            id="mileageRadius"
            name="mileageRadius"
            label="Mileage Radius"
            type="number"
            defaultValue={50}
            required
            slotProps={{
              htmlInput: {
                min: 1,
                max: 100,
              },
            }}
          />

          <TextField id="practitionerFirstName" name="practitionerFirstName" label="Practitioner First Name(optional)" />

          <TextField id="practitionerLastName" name="practitionerLastName" label="Practitioner Last Name(optional)" />

          <Button
            type="submit"
            variant="contained"
            disabled={searching}
            startIcon={searching ? <CircularProgress color="inherit" size={18} /> : <SearchRoundedIcon />}
          >
            {searching ? "Searching..." : "Find a Practitioner"}
          </Button>
        </Box>
      </Paper>

      <Box>
        <Typography id="results-heading" variant="h4" color="primary.dark" className={styles.resultsHeading}>
          {resultText}
        </Typography>
        <Alert severity="info" className={styles.resultsAlert}>
          All practitioners are accepting new patients and are handicap accessible. Network composition can change and
          we recommend that you contact the practitioner&apos;s office to ensure that the practitioner is in network for
          your health plan and seeing new patients.
        </Alert>
        <Stack spacing={2}>
          {providers.map((provider) => (
            <Card variant="outlined" key={provider.id}>
              <CardContent className={styles.resultCardContent}>
                <Typography variant="h6" color="primary.dark">
                  {provider.firstName} {provider.lastName}
                </Typography>
                <Typography className={styles.resultOrg}>{provider.orgName}</Typography>
                <Box className={styles.resultMeta}>
                  <LocationOnOutlinedIcon fontSize="small" />
                  <Typography color="text.secondary">
                    {provider.address1}, {provider.city}, {provider.state} {provider.zipCode}
                  </Typography>
                  <Typography color="text.secondary">{provider.distance} miles away</Typography>
                </Box>
                <Box className={styles.resultPhone}>
                  <LocalPhoneOutlinedIcon fontSize="small" />
                  <Typography component="a" href={`tel:${provider.phone}`} color="inherit" className={styles.phoneLink}>
                    {provider.phone}
                  </Typography>
                </Box>
                <Typography color="text.secondary">
                  {provider.specialties.map((specialty) => specialty.specialtyName).join(", ")}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
