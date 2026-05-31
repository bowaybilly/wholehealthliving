import type { Metadata } from "next";
import { Box } from "@mui/material";
import { ContactContent } from "../_components/contact/contact";
import { useContactStyles } from "../_styles/contact/contact";

export const metadata: Metadata = {
  title: "Connect with Us | WholeHealth Living",
  description:
    "Contact WholeHealth Living to learn more about our practitioner network and health plan solutions.",
};

export default function ContactPage() {
  const styles = useContactStyles();

  return (
    <Box component="main" className={styles.main}>
      <ContactContent />
    </Box>
  );
}
