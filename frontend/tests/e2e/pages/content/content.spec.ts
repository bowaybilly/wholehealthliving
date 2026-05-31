import { expect, test } from "@playwright/test";
import { expectPageHeading } from "../../_utilities/page-assertions";
import { coveredRoutePaths, expectedRoutePaths, generatedContentPages, nestedContentPages } from "../../_utilities/route-coverage";

test.describe("generated content pages", () => {
  test("route coverage manifest includes every generated route", async () => {
    expect(coveredRoutePaths).toEqual(expectedRoutePaths);
  });

  for (const expectation of generatedContentPages) {
    test(`renders ${expectation.path}`, async ({ page }) => {
      await expectPageHeading(page, expectation);
    });
  }

  for (const expectation of nestedContentPages) {
    test(`renders ${expectation.path}`, async ({ page }) => {
      await expectPageHeading(page, expectation);
    });
  }
});
