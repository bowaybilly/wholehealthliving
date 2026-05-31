import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { ContentPage } from "@/lib/content";
import { useContentPageTemplateStyles } from "@/app/_styles/content-page-template/content-page-template";

type Props = {
  page: ContentPage;
};

export default function ContentPageTemplate({ page }: Props) {
  const styles = useContentPageTemplateStyles();

  return (
    <Box component="main">
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.grid}>
          <Box>
            <Typography color="secondary.main" className={styles.eyebrow}>
              {page.title}
            </Typography>
            <Typography component="h1" variant="h2" color="primary.dark" className={styles.heading}>
              {page.heading}
            </Typography>
            <Typography color="text.secondary" className={styles.summary}>
              {page.summary}
            </Typography>
            <Button href="/find-a-practitioner" variant="contained" endIcon={<ArrowForwardRoundedIcon />} className={styles.cta}>
              Find a Practitioner
            </Button>
          </Box>

          <Card variant="outlined">
            <CardContent className={styles.cardContent}>
              <Stack spacing={2}>
                {page.sections.map((section) => (
                  <Box key={section} className={styles.sectionItem}>
                    <CheckCircleRoundedIcon color="secondary" className={styles.sectionIcon} />
                    <Typography color="text.secondary">{section}</Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
