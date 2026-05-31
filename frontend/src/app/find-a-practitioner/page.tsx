import { Alert, Box, Container, Typography } from "@mui/material";
import { PractitionerSearch, useFindPractitionerStyles } from "../_features/find-a-practitioner";

export const metadata = {
  title: "Find a Practitioner | WholeHealth Living",
};

export default function FindPractitionerPage() {
  const styles = useFindPractitionerStyles();

  return (
    <Box component="main">
      <Container maxWidth="lg" className={styles.pageContainer}>
        <Typography component="h1" variant="h2" color="primary.dark" className={styles.pageTitle}>
          Find a Practitioner
        </Typography>
        <Typography color="text.primary" className={styles.introCopy}>
          Please verify your benefits with your health plan. Remember, all practitioners in our Integrative Health
          Network do not participate in all health plan networks. Please contact the practitioner of your choice to
          confirm they accept your health plan insurance.
        </Typography>
        <Typography color="text.secondary" className={styles.instructionCopy}>
          Please complete the required fields noted with an asterisk below to find a practitioner in your area.
        </Typography>
        <Alert severity="info" className={styles.eligibilityAlert}>
          Choices by WholeHealth Living members can receive discounts from 10-40% off on integrative health services
          as well as lifestyle products and services. Check with your health plan if you are eligible for Choices by
          WholeHealth Living.
        </Alert>
        <Box className={styles.searchWrap}>
          <PractitionerSearch />
        </Box>
      </Container>
    </Box>
  );
}
