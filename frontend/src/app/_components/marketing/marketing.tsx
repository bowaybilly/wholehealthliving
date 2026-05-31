import type { CSSProperties } from "react";
import { Box, Button, Container, Link as MuiLink, Typography } from "@mui/material";
import type { AudiencePanelsProps, BenefitColumnsProps, ImageCopyPanelProps } from "../../_types/marketing/marketing";
import { useMarketingStyles } from "../../_styles/marketing/marketing";

function cx(...names: Array<string | false | undefined>) {
  return names.filter(Boolean).join(" ");
}

export function ImageCopyPanel({
  align = "left",
  body,
  children,
  eyebrow,
  flush = false,
  headingComponent = "h2",
  homeHero = false,
  imageUrl,
  title,
  wide = false,
}: ImageCopyPanelProps) {
  const styles = useMarketingStyles();
  const content = (
    <Box className={wide ? styles.widePanelContent : styles.panelContent}>
      {eyebrow ? <Typography className={styles.eyebrow}>{eyebrow}</Typography> : null}
      <Typography component={homeHero ? "h1" : headingComponent} className={homeHero ? styles.homeHeroTitle : styles.heroTitle}>
        {title}
      </Typography>
      <Typography className={homeHero ? styles.homeLead : styles.heroLead}>{body}</Typography>
      {children}
    </Box>
  );

  return (
    <Box
      className={cx(styles.imagePanel, flush && styles.imagePanelFlush, align === "right" && styles.imagePanelRight)}
      style={{ "--panel-image": `url(${imageUrl})`, backgroundImage: `var(--panel-image)` } as CSSProperties}
    >
      {align === "right" ? <Box className={styles.panelAlignRight}>{content}</Box> : content}
    </Box>
  );
}

export function AudiencePanels({ panels }: AudiencePanelsProps) {
  const styles = useMarketingStyles();

  return (
    <Box className={styles.audienceBand}>
      <Container maxWidth="lg" className={styles.audienceContainer}>
        <Box className={styles.audienceGrid}>
          {panels.map((panel) => (
            <Box
              key={panel.title}
              className={styles.audiencePanel}
              style={{ backgroundColor: panel.backgroundColor, "--audience-hover": panel.hoverColor } as CSSProperties}
            >
              <Typography component="h2" className={styles.audienceTitle}>
                {panel.title}
              </Typography>
              <Typography className={styles.audienceSummary}>{panel.summary}</Typography>
              <Button component="a" href={panel.href} variant="outlined" className={styles.audienceButton}>
                More Info
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export function BenefitColumns({ columns }: BenefitColumnsProps) {
  const styles = useMarketingStyles();

  return (
    <Box className={styles.benefitGrid}>
      {columns.map((column, columnIndex) => (
        <Box component="ul" key={columnIndex} className={styles.benefitList}>
          {column.map((benefit) => (
            <Box component="li" key={benefit.label} className={styles.benefitItem}>
              <Box component="span" className={styles.checkMark}>
                ✓
              </Box>
              <MuiLink href={benefit.href} underline="none" className={styles.benefitLink}>
                {benefit.label}
              </MuiLink>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
