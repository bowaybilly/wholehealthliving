import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../general-contact-form";
import { ImageCopyPanel } from "../marketing/marketing";
import { usePractitionersStyles } from "../../_styles/practitioners/practitioners";
import { networkBenefits, recruitmentSpecialties } from "../../_utilities/practitioners/practitioners";

function ContactSidebar() {
  const styles = usePractitionersStyles();

  return (
    <Box>
      <Typography className={styles.eyebrow}>Contact Us</Typography>
      <Typography component="h2" className={styles.contactHeading}>
        Ready for WholeHealth Living?
      </Typography>
      <Typography className={styles.contactCopy}>Fill out the form below to learn more about WholeHealth Living.</Typography>
      <GeneralContactForm />
    </Box>
  );
}

function TextCheckList({ items }: { items: readonly string[] }) {
  const styles = usePractitionersStyles();

  return (
    <Box component="ul" className={styles.checklist}>
      {items.map((item) => (
        <Box component="li" key={item} className={styles.checklistItem}>
          <Box component="span" className={styles.checkMark}>✓</Box>
          {item}
        </Box>
      ))}
    </Box>
  );
}

export function PractitionersContent() {
  const styles = usePractitionersStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <ImageCopyPanel
        headingComponent="h1"
        imageUrl="/images/practitioners-hero.jpg"
        title="Integrative Health Practitioners"
        body="Partner with WholeHealth Living to grow your practice so you can focus on what you do best - caring for your patients."
      />

      <Box className={styles.bodyPanel}>
        <Box className={styles.bodyGrid}>
          <Box>
            <Typography className={styles.leadParagraph}>
              WholeHealth Living has developed and managed practitioner networks for leading health plans for over 30 years. Now more than ever, patients are seeking out alternative therapies to manage musculoskeletal conditions and associated pain, but 7 out of 10 consumers say the out-of-pocket cost is a barrier.<sup>1</sup>
            </Typography>

            <Typography component="h2" className={styles.sectionHeading}>Grow your Practice with WholeHealth Living</Typography>
            <Typography className={styles.paragraph}>
              WholeHealth Living provides your practice access to patients who are seeking integrative health services to improve their health through a covered healthcare benefit or national discount program. We can recruit practitioners in the following specialties below. Contact us today at <Box component="a" href="mailto:WHLrecruitment@tivityhealth.com" className={styles.link}>WHLrecruitment@tivityhealth.com</Box> or 800-274-7526 to learn more about our current recruitment initiatives.
            </Typography>

            <TextCheckList items={recruitmentSpecialties} />

            <Typography component="h2" className={styles.sectionHeading}>Join WholeHealth Living and Gain Access to More Patients</Typography>
            <Typography className={styles.paragraph}>
              WholeHealth Living works with health plans and their primary care providers across the nation to refer patients and health plan members to your office to expand your practice. We currently offer two national networks for all our practitioners. Learn more about the unique benefits of each.
            </Typography>

            <Box component="ul" className={styles.checklist}>
              {networkBenefits.map((item) => (
                <Box component="li" key={item.strong} className={styles.checklistItem}>
                  <Box component="span" className={styles.checkMark}>✓</Box>
                  <Box component="span">
                    <Box component="strong">{item.strong}</Box>
                    {item.body} <Box component="a" href={item.href} className={styles.underlinedLink}>Learn more</Box>.
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className={styles.divider}>
              <Box component="ol" className={styles.footnotes}>
                <Box component="li" className={styles.footnoteItem}>
                  <Box component="em">&quot;Perceptions Of Complementary & Alternative Medicine Among The SilverSneakers Population&quot; Tivity Health Consumer Research, September 2019</Box> which surveyed two separate populations: SilverSneakers members and the general population.
                </Box>
              </Box>
            </Box>
          </Box>

          <ContactSidebar />
        </Box>
      </Box>
    </Container>
  );
}
