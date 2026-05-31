import { expect, type Page } from "@playwright/test";

export type PageExpectation = {
  path: string;
  heading: string | RegExp;
  visibleText?: string | RegExp;
};

export async function expectPageHeading(page: Page, expectation: PageExpectation) {
  await page.goto(expectation.path);
  await expect(page.getByRole("heading", { level: 1, name: expectation.heading })).toBeVisible();

  if (expectation.visibleText) {
    await expect(page.getByText(expectation.visibleText).filter({ visible: true }).first()).toBeVisible();
  }
}

export async function expectLocalImage(page: Page, selector: string, expectedPath: string) {
  const image = page.locator(selector).first();
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute("src", expectedPath);

  const dimensions = await image.evaluate((element) => {
    const img = element as HTMLImageElement;
    return { complete: img.complete, naturalHeight: img.naturalHeight, naturalWidth: img.naturalWidth };
  });

  expect(dimensions.complete).toBe(true);
  expect(dimensions.naturalWidth).toBeGreaterThan(0);
  expect(dimensions.naturalHeight).toBeGreaterThan(0);
}

export async function expectLocalBackgroundImage(page: Page, selector: string, expectedPath: string) {
  const element = page.locator(selector).first();
  await expect(element).toBeVisible();

  const backgroundImage = await element.evaluate((node) => getComputedStyle(node).backgroundImage);
  expect(backgroundImage).toContain(expectedPath);
}

export async function expectNoProductionAssetUrls(page: Page, path = "/") {
  await page.goto(path);
  const assetUrls = await page.evaluate(() => {
    const imageSources = Array.from(document.images).map((image) => image.currentSrc || image.src);
    const backgroundSources = Array.from(document.querySelectorAll<HTMLElement>("*"))
      .map((element) => getComputedStyle(element).backgroundImage)
      .filter((value) => value && value !== "none");

    return [...imageSources, ...backgroundSources];
  });

  expect(assetUrls.some((url) => url.includes("www.wholehealthliving.com/wp-content/uploads"))).toBe(false);
}
