import type { Metadata } from "next";
import { Box } from "@mui/material";
import { HealthPlansContent } from "../_components/health-plans/health-plans";
import { useHealthPlansStyles } from "../_styles/health-plans/health-plans";

export const metadata: Metadata = {
  title: "Health Plans | WholeHealth Living",
  description:
    "WholeHealth Living helps health plans deliver integrative health solutions with a credentialed network and clinical oversight.",
};

export default function HealthPlansPage() {
  const styles = useHealthPlansStyles();

  return (
    <Box component="main" className={styles.main}>
      <HealthPlansContent />
    </Box>
  );
}
