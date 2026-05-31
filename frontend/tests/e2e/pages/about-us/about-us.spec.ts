import { test } from "@playwright/test";
import { expectLocalImage, expectPageHeading } from "../../_utilities/page-assertions";
import { primaryPages } from "../../_utilities/primary-pages";

test("about us page renders accreditation content", async ({ page }) => {
  await expectPageHeading(page, primaryPages[5]);
  await expectLocalImage(page, 'img[alt="WholeHealth Living NCQA CVO accreditation seal"]', "/images/ncqa-cvo-accreditation.jpg");
  await expectLocalImage(page, 'img[alt="WholeHealth Living URAC accreditation seal"]', "/images/urac-um-accreditation.jpg");
});
