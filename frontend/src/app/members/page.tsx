import type { Metadata } from "next";
import { Box } from "@mui/material";
import { MembersContent, MembersQuote } from "../_components/members/members";
import { useMarketingStyles } from "../_styles/marketing/marketing";

export const metadata: Metadata = {
  title: "Benefits for Members | WholeHealth Living",
  description:
    "WholeHealth Living makes it easy to find cost-effective integrative solutions to support your health and wellbeing.",
};

export default function MembersPage() {
  const styles = useMarketingStyles();

  return (
    <Box component="main" className={styles.main}>
      <MembersContent />
      <MembersQuote />
    </Box>
  );
}
