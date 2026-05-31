import { Box, Container, Typography } from "@mui/material";
import { AudiencePanels, BenefitColumns, ImageCopyPanel } from "./_components/marketing/marketing";
import { useMarketingStyles } from "./_styles/marketing/marketing";
import { audiencePanels, benefitColumns, citations } from "./_utilities/marketing/marketing";

export default function Home() {
  const styles = useMarketingStyles();

  return (
    <Box component="main" className={styles.main}>
      <Container maxWidth="lg" className={styles.heroContainer}>
        <ImageCopyPanel
          flush
          homeHero
          imageUrl="/images/wholehealth-living-hiking.webp"
          title="Live Life Well"
          body="Decreasing physical pain and transforming healthcare through integrative health solutions."
        />
      </Container>

      <AudiencePanels panels={audiencePanels} />

      <Container maxWidth="lg" className={styles.sectionContainer}>
        <ImageCopyPanel
          align="right"
          wide
          imageUrl="/images/wholehealth-living-skateboarding.webp"
          eyebrow="Our Purpose"
          title="Transforming Lives"
          body="For over 30 years, we have been dedicated to transforming our members' lives by helping them manage their health and well-being through our physical medicine and integrative health solutions."
        />

        <ImageCopyPanel
          flush
          imageUrl="/images/wholehealth-living-grandson.webp"
          eyebrow="Our Benefits"
          title="Whole Health"
          body="Access a full range of in-network Physical Medicine and Integrative Health benefits:"
        >
          <BenefitColumns columns={benefitColumns} />
        </ImageCopyPanel>
      </Container>

      <Box className={styles.quoteBand}>
        <Container maxWidth="lg">
          <Typography className={styles.quoteText}>
            Government agencies including the Centers for Disease Control (CDC), Centers for Medicare &amp; Medicaid Services (CMS) and other industry authorities are encouraging the use of non-pharmacological alternatives for pain management.
          </Typography>
          <Box component="ol" className={styles.citations}>
            {citations.map((citation) => (
              <Box component="li" key={citation} className={styles.citation}>
                {citation}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
