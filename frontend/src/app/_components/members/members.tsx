import { Box, Button, Container, Typography } from "@mui/material";
import { BenefitColumns, ImageCopyPanel } from "../marketing/marketing";
import { useMarketingStyles } from "../../_styles/marketing/marketing";
import { useMembersStyles } from "../../_styles/members/members";
import { memberBenefitColumns } from "../../_utilities/members/members";

export function MembersIntroPanel() {
  return (
    <ImageCopyPanel
      headingComponent="h1"
      imageUrl="/images/wholehealth-living-gardening.webp"
      title="Be Well"
      body="WholeHealth Living is dedicated to transforming your life by helping you manage your health and well-being, so you can get back to living your life."
    />
  );
}

export function MembersPractitionerPanel() {
  const styles = useMembersStyles();

  return (
    <ImageCopyPanel
      align="right"
      imageUrl="/images/wholehealth-living-glowing.webp"
      title="Choose your Practitioner"
      body="WholeHealth Living makes it easy to find integrative health services to support your health and well-being."
    >
      <Typography className={styles.supportingCopy}>
        Keeping healthy has never been more cost-effective. Our broad range of integrative health services may be part of your health plan&apos;s network.
      </Typography>
      <Button component="a" href="/find-a-practitioner" variant="outlined" className={styles.findButton}>
        Find a Practitioner Near Me
      </Button>
    </ImageCopyPanel>
  );
}

export function MembersBenefitsPanel() {
  return (
    <ImageCopyPanel
      flush
      imageUrl="/images/wholehealth-living-splashtime.webp"
      eyebrow="The Benefits"
      title="Whole Health"
      body="When WholeHealth Living's Integrative Health Solutions are included in your health plan benefits, you can take advantage of reduced or even zero out-of-pocket costs so you can get back to living the life you love."
    >
      <BenefitColumns columns={memberBenefitColumns} />
    </ImageCopyPanel>
  );
}

export function MembersQuote() {
  const styles = useMembersStyles();

  return (
    <Box className={styles.quoteBand}>
      <Container maxWidth="lg">
        <Typography className={styles.quote}>
          &quot;Regular chiropractic care and a series of acupuncture treatments have helped me manage my pain and get back to a life I love.&quot;
        </Typography>
        <Typography className={styles.attribution}>Bob, Indiana</Typography>
      </Container>
    </Box>
  );
}

export function MembersContent() {
  const marketingStyles = useMarketingStyles();

  return (
    <Container maxWidth="lg" className={marketingStyles.heroContainer}>
      <MembersIntroPanel />
      <MembersPractitionerPanel />
      <MembersBenefitsPanel />
    </Container>
  );
}
