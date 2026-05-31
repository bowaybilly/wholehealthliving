import { expect, test } from "@playwright/test";
import { expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("find practitioner form validates required fields", async ({ page }) => {
  await expectPageHeading(page, primaryPages[7]);

  await page.getByRole("button", { name: /Find a Practitioner/ }).click();
  await expect(page.getByText(/Choose a health plan|Enter a five digit ZIP code/)).toBeVisible();
});
