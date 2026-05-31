import { test } from "@playwright/test";
import { expectLocalBackgroundImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("practitioners page renders recruitment content", async ({ page }) => {
  await expectPageHeading(page, primaryPages[3]);
  await expectLocalBackgroundImage(page, "[class*=imagePanel]", "/images/practitioners-hero.jpg");
});
