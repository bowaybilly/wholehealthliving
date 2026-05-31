import { z } from "zod";

export const apiCandidates = Array.from(
  new Set(
    [
      process.env.NEXT_PUBLIC_API_BASE_URL,
      "http://localhost:5223",
      "http://localhost:5224",
    ].filter((value): value is string => Boolean(value)),
  ),
);

export const practitionerSearchSchema = z.object({
  clientDisplayName: z.string().min(1, "Choose a health plan."),
  whlSpecialtyId: z.string().min(1, "Choose a specialty."),
  lineOfBusiness: z.string().min(1, "Choose a line of business."),
  zipCode: z.string().regex(/^\d{5}$/, "Enter a five digit ZIP code."),
  mileageRadius: z.coerce.number().min(1).max(100),
  practitionerFirstName: z.string().optional(),
  practitionerLastName: z.string().optional(),
});

export async function getJson<T>(apiBase: string, path: string): Promise<T> {
  const response = await fetch(`${apiBase}${path}`);
  if (!response.ok) {
    throw new Error("Request failed.");
  }

  return response.json();
}
