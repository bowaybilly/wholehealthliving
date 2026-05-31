import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../../../general-contact-form";
import { usePractitionerSubmenuStyles } from "../../../../_styles/menu/submenu/practitioners/practitioners";
import type { PractitionerContentSectionProps, PractitionerSubmenuPageProps } from "../../../../_types/menu/submenu/practitioners/practitioners";

function ContactColumn() {
  const styles = usePractitionerSubmenuStyles();

  return (
    <Box className={styles.contactBox}>
      <Typography component="h2" className={styles.contactHeading}>
        Ready for WholeHealth Living?
      </Typography>
      <Typography className={styles.paragraph}>Fill out the form below to learn more about WholeHealth Living.</Typography>
      <GeneralContactForm />
    </Box>
  );
}

function ContentSection({ section }: PractitionerContentSectionProps) {
  const styles = usePractitionerSubmenuStyles();

  return (
    <Box className={styles.section}>
      <Typography component="h2" className={styles.sectionHeading}>
        {section.heading}
      </Typography>
      {section.paragraphs?.map((paragraph) => (
        <Typography key={paragraph} className={styles.paragraph}>
          {paragraph}
        </Typography>
      ))}
      {section.items ? (
        <Box component="ul" className={styles.list}>
          {section.items.map((item) => (
            <Box component="li" key={item} className={styles.listItem}>
              {item}
            </Box>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

export function PractitionerSubmenuContent({ page }: PractitionerSubmenuPageProps) {
  const styles = usePractitionerSubmenuStyles();

  return (
    <Box component="main" className={styles.page}>
      <Box className={styles.hero}>
        <Container maxWidth="lg">
          <Box className={styles.heroGrid}>
            <Box>
              <Typography component="h1" className={styles.title}>
                {page.title}
              </Typography>
              <Typography className={styles.description}>{page.description}</Typography>
            </Box>
            <Box component="img" src={page.image} alt="" className={styles.heroImage} />
          </Box>
        </Container>
      </Box>

      <Box className={styles.body}>
        <Container maxWidth="lg">
          <Box className={styles.bodyGrid}>
            <Box>
              {page.sections.map((section) => (
                <ContentSection key={section.heading} section={section} />
              ))}

              <ContentSection
                section={{
                  heading: page.recruitmentHeading,
                  paragraphs: [page.recruitmentCopy],
                  items: page.specialties,
                }}
              />

              <Box className={styles.footnotes}>
                <Typography className={styles.footnote}>{page.footnote}</Typography>
              </Box>
            </Box>
            <ContactColumn />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export function PractitionerSubmenuPage({ page }: PractitionerSubmenuPageProps) {
  return <PractitionerSubmenuContent page={page} />;
}
