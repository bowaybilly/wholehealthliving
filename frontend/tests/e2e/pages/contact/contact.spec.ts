import { expect, test } from "@playwright/test";
import { expectLocalImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("contact page renders form and local image", async ({ page }) => {
  await expectPageHeading(page, primaryPages[6]);
  await expect(page.getByLabel("First Name")).toBeVisible();
  await expect(page.getByLabel("Last Name")).toBeVisible();
  await expect(page.getByLabel("Email")).toBeVisible();
  await expectLocalImage(page, 'img[alt="WholeHealth Living for Healthy Life"]', "/images/wholehealth-living-healthy-life.webp");
});
