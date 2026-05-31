import { test } from "@playwright/test";
import { expectLocalBackgroundImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("providers page renders provider content", async ({ page }) => {
  await expectPageHeading(page, primaryPages[4]);
  await expectLocalBackgroundImage(page, "[class*=imagePanel]", "/images/providers-hero.jpg");
});
