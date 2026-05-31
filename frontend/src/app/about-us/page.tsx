import type { Metadata } from "next";
import { Box } from "@mui/material";
import { AboutUsContent } from "../_components/about-us/about-us";
import { useAboutUsStyles } from "../_styles/about-us/about-us";

export const metadata: Metadata = {
  title: "WholeHealth Living for Better Health | WholeHealth Living",
  description:
    "Learn more about WholeHealth Living's mission, vision, and accreditations.",
};

export default function AboutUsPage() {
  const styles = useAboutUsStyles();

  return (
    <Box component="main" className={styles.main}>
      <AboutUsContent />
    </Box>
  );
}
