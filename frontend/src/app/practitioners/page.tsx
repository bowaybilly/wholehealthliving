import type { Metadata } from "next";
import { Box } from "@mui/material";
import { PractitionersContent } from "../_components/practitioners/practitioners";
import { usePractitionersStyles } from "../_styles/practitioners/practitioners";

export const metadata: Metadata = {
  title: "Physical Medicine & Integrative Health Practitioners | WholeHealth Living",
  description:
    "Partner with WholeHealth Living to grow your practice and connect with patients seeking integrative health services.",
};

export default function PractitionersPage() {
  const styles = usePractitionersStyles();

  return (
    <Box component="main" className={styles.main}>
      <PractitionersContent />
    </Box>
  );
}
