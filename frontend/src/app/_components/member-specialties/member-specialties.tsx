import { Box, Button, Container, Typography } from "@mui/material";
import { useMemberSpecialtiesStyles } from "../../_styles/member-specialties/member-specialties";
import type { MemberSpecialtyPageData, MemberSpecialtySection } from "../../_types/member-specialties/member-specialties";

type Props = {
  page: MemberSpecialtyPageData;
};

type SectionProps = {
  section: MemberSpecialtySection;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

function SectionCopy({ section }: { section: MemberSpecialtySection }) {
  const styles = useMemberSpecialtiesStyles();

  return (
    <Box>
      <Typography className={styles.eyebrow}>{section.eyebrow}</Typography>
      <Typography component="h2" className={styles.sectionTitle}>
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
            <Box component="li" key={`${item.label ?? ""}${item.text}`} className={styles.listItem}>
              {item.label ? <span className={styles.itemLabel}>{item.label}: </span> : null}
              {item.text}
              {item.marker ? <sup>{item.marker}</sup> : null}
            </Box>
          ))}
        </Box>
      ) : null}
      {section.footnotes ? (
        <Box className={styles.footnotes}>
          {section.footnotes.map((footnote) => (
            <Typography key={footnote} className={styles.footnote}>
              {footnote}
            </Typography>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

function SpecialtySection({ section, image, imageAlt, reverse = false }: SectionProps) {
  const styles = useMemberSpecialtiesStyles();

  return (
    <Box className={`${styles.section} ${reverse ? styles.sectionMuted : ""}`}>
      <Container maxWidth="lg">
        <Box className={reverse ? styles.contentGridReverse : styles.contentGrid}>
          <Box className={styles.imageWrap}>
            <Box component="img" src={image} alt={imageAlt} className={`${styles.image} ${reverse ? styles.secondaryImage : ""}`} />
          </Box>
          <SectionCopy section={section} />
        </Box>
      </Container>
    </Box>
  );
}

export function MemberSpecialtyPage({ page }: Props) {
  const styles = useMemberSpecialtiesStyles();

  return (
    <Box component="main" className={styles.page}>
      <Box className={`${styles.hero} ${styles[page.heroClass]}`}>
        <Container maxWidth="lg">
          <Box className={styles.heroPanel}>
            <Typography component="h1" className={styles.heroTitle}>
              {page.title}
            </Typography>
            <Typography className={styles.heroText}>{page.description}</Typography>
            <Button href="/find-a-practitioner" variant="contained" className={styles.cta}>
              {page.ctaLabel}
            </Button>
          </Box>
        </Container>
      </Box>

      <SpecialtySection section={page.intro} image={page.primaryImage} imageAlt={`${page.title} care`} />
      <SpecialtySection section={page.treatment} image={page.secondaryImage ?? page.primaryImage} imageAlt={`${page.title} benefits`} reverse />

      {page.quote ? (
        <Box className={styles.quoteBand}>
          <Container maxWidth="lg">
            <Typography className={styles.quote}>{page.quote}</Typography>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}
