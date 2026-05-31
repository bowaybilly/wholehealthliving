import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box } from "@mui/material";
import { DesignSystemProvider } from "@/design-system";
import { ErrorReportingProvider } from "@/infrastructure/error-reporting";
import { SiteFooter, SiteHeader } from "./_components/layout/layout";
import { useLayoutStyles } from "./_styles/layout/layout";
import { ReduxProvider } from "./_store/provider";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WholeHealth Living",
  description:
    "Cost-effective physical medicine and integrative health solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles = useLayoutStyles();

  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <AppRouterCacheProvider>
          <DesignSystemProvider>
            <ErrorReportingProvider>
              <ReduxProvider>
                <Box className={styles.appShell}>
                  <SiteHeader />
                  <Box component="div" className={styles.mainContent}>
                    {children}
                  </Box>
                  <SiteFooter />
                </Box>
              </ReduxProvider>
            </ErrorReportingProvider>
          </DesignSystemProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
