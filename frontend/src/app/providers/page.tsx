import type { Metadata } from "next";
import { Box } from "@mui/material";
import { ProvidersContent } from "../_components/providers/providers";
import { useProvidersStyles } from "../_styles/providers/providers";

export const metadata: Metadata = {
  title: "Healthcare Providers | WholeHealth Living",
  description:
    "Connect your patients with WholeHealth Living's credentialed integrative health practitioners.",
};

export default function ProvidersPage() {
  const styles = useProvidersStyles();

  return (
    <Box component="main" className={styles.main}>
      <ProvidersContent />
    </Box>
  );
}
