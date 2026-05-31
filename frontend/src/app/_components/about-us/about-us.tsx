import { Box, Container, Typography } from "@mui/material";
import { useAboutUsStyles } from "../../_styles/about-us/about-us";
import { aboutUsParagraphs, accreditationSeals } from "../../_utilities/about-us/about-us";

export function AboutUsContent() {
  const styles = useAboutUsStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.panel}>
        <Typography component="h1" className={styles.title}>WholeHealth Living for Better Health</Typography>
        <Typography className={styles.leadStrong}>
          WholeHealth Living is a Tivity Health company which provides SilverSneakers - the nation&apos;s most recognized and respected fitness program specifically designed for older adults. Tivity Health provides fitness, enrichment and social opportunities for over 18 million seniors across the country.
        </Typography>

        {aboutUsParagraphs.map((paragraph) => (
          <Typography key={paragraph} className={styles.paragraph}>{paragraph}</Typography>
        ))}

        <Box className={styles.twoColumnGrid}>
          <Box>
            <Typography component="h2" className={styles.smallHeading}>Our Mission</Typography>
            <Typography className={styles.blueCopy}>
              WholeHealth Living delivers cost-effective integrative health solutions, connecting members with qualified licensed practitioners, and educating the broader medical community on the importance of integrating nonpharmacological options into patient care.
            </Typography>
          </Box>
          <Box>
            <Typography component="h2" className={styles.smallHeading}>Our Vision</Typography>
            <Typography className={styles.blueCopy}>
              WholeHealth Living strives to decrease physical pain of members nationwide and transform healthcare delivery by increasing awareness and accessibility of integrative health solutions.
            </Typography>
          </Box>
        </Box>

        <Typography component="h2" className={styles.sectionHeading}>WholeHealth Living&apos;s Accreditations</Typography>
        <Typography className={styles.paragraph}>
          Maintaining accreditation for the services we provide within WholeHealth Living is critical for the organization to meet current and future customer expectations. The process to receive and maintain accreditation is rigorous and includes the organization submitting evidence of compliance of policies to meet the accrediting bodies standards, evidence the organization follows processes aligned with the standards and audit of the organizations files.
        </Typography>
        <Typography className={styles.paragraph}>
          WholeHealth Living, Inc. has been accredited with URAC for Health Utilization Management (HUM) since 1997 and with National Committee for Quality Assurance (NCQA) for Utilization Management since 2014. We are licensed to conduct utilization management in all states where this is a requirement.
        </Typography>
        <Typography className={styles.paragraph}>
          WholeHealth Living Inc. Credentialing Department has been a NCQA certified Credential Verification Organization (CVO) since 2000. Delegating to an organization that is NCQA certified, like WholeHealth Living, Inc. Credentialing Department, helps streamline the delegation oversight process. WholeHealth Living, Inc. Credentialing Department has received certification from NCQA for the following credentials verification services license to practice, education and training, work history, malpractice claims history, Medicaid/Medicare Sanctions, CVO application and attestation content, practitioner application processing and ongoing monitoring.
        </Typography>

        <Box className={styles.accreditationLinkWrap}>
          <Typography component="a" href="https://accreditnet.urac.org/directory/#/accreditation/HUM-48/info" className={styles.textLink}>Health Utilization Management</Typography>
          <Typography className={styles.date}>08/01/2025</Typography>
        </Box>

        <Box className={styles.sealGrid}>
          {accreditationSeals.map((seal) => (
            <Box key={seal.src} component="img" alt={seal.alt} src={seal.src} className={styles.sealImage} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
