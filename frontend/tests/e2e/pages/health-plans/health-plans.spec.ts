import { test } from "@playwright/test";
import { expectLocalBackgroundImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("health plans page renders plan content", async ({ page }) => {
  await expectPageHeading(page, primaryPages[2]);
  await expectLocalBackgroundImage(page, "[class*=imagePanel]", "/images/wholehealth-living-healthplans.webp");
});
