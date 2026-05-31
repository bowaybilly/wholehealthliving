import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../general-contact-form";
import { ImageCopyPanel } from "../marketing/marketing";
import { useHealthPlansStyles } from "../../_styles/health-plans/health-plans";
import { healthPlansContent } from "../../_utilities/health-plans/health-plans";

function ContactSidebar() {
  const styles = useHealthPlansStyles();

  return (
    <Box>
      <Typography className={styles.eyebrow}>Contact Us</Typography>
      <Typography component="h2" className={styles.contactHeading}>
        Ready for WholeHealth Living?
      </Typography>
      <Typography className={styles.contactCopy}>
        Fill out the form below to learn more about WholeHealth Living.
      </Typography>
      <GeneralContactForm />
    </Box>
  );
}

export function HealthPlansContent() {
  const styles = useHealthPlansStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <ImageCopyPanel
        headingComponent="h1"
        imageUrl="/images/wholehealth-living-healthplans.webp"
        title="Health Plans"
        body="WholeHealth Living makes it easy to offer a variety of integrative health solutions to support the health and well-being of your members."
      />

      <Box className={styles.bodyPanel}>
        <Box className={styles.bodyGrid}>
          <Box>
            {healthPlansContent.bodyParagraphs.map((paragraph, index) => (
              <Typography key={paragraph} className={index === 0 ? styles.leadParagraph : styles.paragraph}>
                {paragraph}
              </Typography>
            ))}

            <Typography component="h2" className={styles.sectionHeading}>
              WholeHealth Living&apos;s Integrative Health Solutions
            </Typography>
            <Typography className={styles.paragraph}>
              Our Integrative Health Solutions provides clients a customized specialty benefit that is developed through our consultative approach that includes benefit design, management of a credentialed network, and appropriate cost containment through medically necessary care. Our Integrative Health Solutions are custom designed for each health plan client by combing our four core services and seven specialties. <Box component="a" href="/health-plans/integrative-health-solutions" className={styles.underlinedLink}>Learn more</Box>.
            </Typography>

            <Box component="ol" className={styles.footnotes}>
              <Box component="li" className={styles.footnoteItem}>
                {healthPlansContent.footnote}
              </Box>
            </Box>
          </Box>

          <ContactSidebar />
        </Box>
      </Box>
    </Container>
  );
}
