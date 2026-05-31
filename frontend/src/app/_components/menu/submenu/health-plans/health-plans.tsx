import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../../../general-contact-form";
import { useHealthPlanSubmenuStyles } from "../../../../_styles/menu/submenu/health-plans/health-plans";
import type { HealthPlanContactColumnProps, HealthPlanFootnotesProps, HealthPlanProductsPageProps, HealthPlanSpecialtyPageProps, HealthPlanSubmenuPageProps } from "../../../../_types/menu/submenu/health-plans/health-plans";

function ContactColumn({ products = false }: HealthPlanContactColumnProps) {
  const styles = useHealthPlanSubmenuStyles();

  return (
    <Box className={styles.contactBox}>
      <Typography className={styles.contactEyebrow}>Contact Us</Typography>
      <Typography component="h2" className={styles.contentHeading}>
        Ready for WholeHealth Living?
      </Typography>
      <Typography className={styles.paragraph}>
        Fill out the form below to learn more about {products ? "joining the WholeHealth Living network." : "WholeHealth Living."}
      </Typography>
      <GeneralContactForm />
    </Box>
  );
}

function Footnotes({ notes }: HealthPlanFootnotesProps) {
  const styles = useHealthPlanSubmenuStyles();

  if (!notes?.length) {
    return null;
  }

  return (
    <Box className={styles.footnotes}>
      {notes.map((note) => (
        <Typography key={note} className={styles.footnote}>
          {note}
        </Typography>
      ))}
    </Box>
  );
}

export function HealthPlanSpecialtyPage({ page }: HealthPlanSpecialtyPageProps) {
  const styles = useHealthPlanSubmenuStyles();

  return (
    <Box component="main" className={styles.page}>
      <Box className={`${styles.hero} ${styles[page.heroClass]}`}>
        <Container maxWidth="lg">
          <Box className={styles.heroPanel}>
            <Typography component="h1" className={styles.title}>
              {page.title}
            </Typography>
            <Typography className={styles.description}>{page.description}</Typography>
          </Box>
        </Container>
      </Box>

      <Box className={styles.body}>
        <Container maxWidth="lg">
          <Box className={styles.bodyGrid}>
            <Box>
              <Typography component="h2" className={styles.contentHeading}>
                {page.heading}
              </Typography>
              {page.intro ? <Typography className={styles.paragraph}>{page.intro}</Typography> : null}
              <Box component="ul" className={styles.benefitList}>
                {page.benefits.map((benefit) => (
                  <Box component="li" key={benefit.label} className={styles.benefitItem}>
                    <span className={styles.itemLabel}>{benefit.label}</span> - {benefit.text}
                    {benefit.marker ? <sup>{benefit.marker}</sup> : null}
                  </Box>
                ))}
              </Box>
              <Box component="img" src={page.image} alt={`${page.title} benefit`} className={styles.contentImage} />
              <Footnotes notes={page.footnotes} />
            </Box>
            <ContactColumn />
          </Box>
        </Container>
      </Box>

      {page.quote ? (
        <Box className={styles.quoteBand}>
          <Container maxWidth="lg">
            <Typography className={styles.quote}>{page.quote}</Typography>
            {page.quoteFootnote ? <Typography className={styles.footnote}>{page.quoteFootnote}</Typography> : null}
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}

export function HealthPlanProductsPage({ page }: HealthPlanProductsPageProps) {
  const styles = useHealthPlanSubmenuStyles();

  return (
    <Box component="main" className={styles.page}>
      <Box className={styles.productsHero}>
        <Container maxWidth="lg">
          <Box className={styles.productsHeroGrid}>
            <Box>
              <Typography component="h1" className={styles.title}>
                {page.title}
              </Typography>
              <Typography className={styles.description}>{page.description}</Typography>
            </Box>
            <Box component="img" src={page.heroImage} alt="" className={styles.heroImage} />
          </Box>
        </Container>
      </Box>

      <Box className={styles.body}>
        <Container maxWidth="lg">
          <Box className={styles.bodyGrid}>
            <Box>
              <Typography className={styles.lead}>{page.lead}</Typography>
              <Typography className={styles.paragraph}>{page.summary}</Typography>

              <Typography component="h2" className={styles.sectionHeading}>
                Our Core Services
              </Typography>
              <Box component="ul" className={styles.serviceList}>
                {page.services.map((service) => (
                  <Box component="li" key={service.label} className={styles.serviceItem}>
                    <span className={styles.itemLabel}>{service.label}</span> - {service.text}
                    {service.subitems ? (
                      <Box component="ul" className={styles.nestedList}>
                        {service.subitems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </Box>
                    ) : null}
                  </Box>
                ))}
              </Box>

              <Typography component="h2" className={styles.sectionHeading}>
                Our Specialties
              </Typography>
              <Typography className={styles.paragraph}>{page.specialtiesIntro}</Typography>
              <Box component="ul" className={styles.specialtyList}>
                {page.specialties.map((specialty) => (
                  <Box component="li" key={specialty.href} className={styles.specialtyItem}>
                    <Box component="a" href={specialty.href} className={styles.inlineLink}>
                      {specialty.label}
                    </Box>{" "}
                    {specialty.text}
                  </Box>
                ))}
              </Box>
              <Footnotes notes={[page.footnote]} />
            </Box>
            <Box>
              <Box component="img" src={page.sidebarImage} alt="" className={styles.sidebarImage} />
              <ContactColumn products />
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export function HealthPlanSubmenuPage({ page }: HealthPlanSubmenuPageProps) {
  return page.kind === "products" ? <HealthPlanProductsPage page={page} /> : <HealthPlanSpecialtyPage page={page} />;
}
