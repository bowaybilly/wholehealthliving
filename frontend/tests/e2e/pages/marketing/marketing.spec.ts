import { expect, test } from "@playwright/test";
import { expectLocalBackgroundImage, expectLocalImage, expectNoProductionAssetUrls, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("marketing home page exposes audience paths and local imagery", async ({ page }) => {
  await expectPageHeading(page, primaryPages[0]);

  const nav = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(nav.getByRole("link", { name: "Members" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Health Plans" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Practitioners" })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Providers" })).toBeVisible();

  await expectLocalImage(page, 'img[alt="WholeHealth Living"]', "/images/whl-logo-20221201.svg");
  await expectLocalBackgroundImage(page, "[class*=imagePanel]", "/images/wholehealth-living-hiking.webp");
  await expectNoProductionAssetUrls(page);
});

test("marketing home page preserves hero scale", async ({ page }) => {
  await page.goto("/");
  const width = page.viewportSize()?.width ?? 0;

  const hero = await page.getByRole("heading", { level: 1, name: "Live Life Well" }).evaluate((element) => {
    const styles = getComputedStyle(element);
    return { fontSize: styles.fontSize, lineHeight: styles.lineHeight };
  });

  if (width >= 900) {
    expect(hero.fontSize).toBe("90px");
    expect(hero.lineHeight).toBe("81px");
  } else {
    expect(hero.fontSize).toBe("54px");
    expect(hero.lineHeight).toBe("50.76px");
  }
});
