import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../general-contact-form";
import { ImageCopyPanel } from "../marketing/marketing";
import { useProvidersStyles } from "../../_styles/providers/providers";
import { providerEvidence } from "../../_utilities/providers/providers";

function ContactSidebar() {
  const styles = useProvidersStyles();

  return (
    <Box>
      <Typography className={styles.eyebrow}>Contact Us</Typography>
      <Typography component="h2" className={styles.contactHeading}>Ready for WholeHealth Living?</Typography>
      <Typography className={styles.contactCopy}>Fill out the form below to learn more about WholeHealth Living.</Typography>
      <GeneralContactForm />
    </Box>
  );
}

function EvidenceList() {
  const styles = useProvidersStyles();

  return (
    <Box component="ul" className={styles.checklist}>
      {providerEvidence.evidencePoints.map((item) => (
        <Box component="li" key={item} className={styles.checklistItem}>
          <Box component="span" className={styles.checkMark}>✓</Box>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export function ProvidersContent() {
  const styles = useProvidersStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <ImageCopyPanel
        headingComponent="h1"
        imageUrl="/images/providers-hero.jpg"
        title="Healthcare Providers"
        body="Access a network of high-quality, credentialed integrated health practitioners that you can trust to care for your patients."
      />

      <Box className={styles.bodyPanel}>
        <Box className={styles.bodyGrid}>
          <Box>
            <Typography className={styles.leadParagraph}>
              Research shows that patients are more likely to utilize an integrated health practitioner when recommended by their primary care provider (PCP), or medical specialist. WholeHealth Living makes it easy for patients to locate in-network practitioners who can help them manage their pain and improve physical function.
            </Typography>

            <EvidenceList />

            <Typography className={styles.paragraph}>
              WholeHealth Living provides a robust network of qualified and credentialed integrative health practitioners that your members can trust. WholeHealth Living facilitates the connection between providers like you, and our Integrative Health Network. We promote the awareness and efficacy of integrative health services to help your patients reduce pain and return to the life they love. Learn more about how you can partner with WholeHealth Living to promote evidence-based, nonpharmacological integrative health services. Contact us at <Box component="a" href="mailto:WHL@tivityhealth.com" className={styles.link}>WHL@tivityhealth.com</Box>.
            </Typography>

            <Typography component="h2" className={styles.statHeading}>
              Four out of five members are likely to visit an integrative health practitioner if their provider makes this recommendation. 3
            </Typography>

            <Box component="ol" className={styles.footnotes}>
              {providerEvidence.footnotes.map((item) => (
                <Box component="li" key={item} className={styles.footnoteItem}>{item}</Box>
              ))}
            </Box>
          </Box>

          <ContactSidebar />
        </Box>
      </Box>
    </Container>
  );
}
