import { test } from "@playwright/test";
import { expectLocalBackgroundImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("members page renders member panels", async ({ page }) => {
  await expectPageHeading(page, primaryPages[1]);
  await expectLocalBackgroundImage(page, "[class*=imagePanel]", "/images/wholehealth-living-gardening.webp");
});
