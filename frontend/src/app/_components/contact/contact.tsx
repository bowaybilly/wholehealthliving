import { Box, Container, Typography } from "@mui/material";
import GeneralContactForm from "../general-contact-form";
import { useContactStyles } from "../../_styles/contact/contact";
import { contactImage } from "../../_utilities/contact/contact";

export function ContactContent() {
  const styles = useContactStyles();

  return (
    <Container maxWidth="lg" className={styles.container}>
      <Box className={styles.panel}>
        <Typography component="h1" className={styles.title}>Connect with Us</Typography>
        <Typography className={styles.lead}>
          Are you a practitioner wanting to join our network, or a health plan looking to improve the lives of your members? We&apos;d love to hear from you.
        </Typography>
        <Typography className={styles.paragraph}>Fill out the form below to obtain more information about WholeHealth Living.</Typography>

        <Box className={styles.grid}>
          <Box>
            <GeneralContactForm />
          </Box>
          <Box component="img" alt={contactImage.alt} src={contactImage.src} className={styles.image} />
        </Box>
      </Box>
    </Container>
  );
}
