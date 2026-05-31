import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container, IconButton, Link as MuiLink, Toolbar, Typography } from "@mui/material";
import type { NavItem } from "../../_types/layout/layout";
import { navItems } from "../../_utilities/layout/layout";
import { useLayoutStyles } from "../../_styles/layout/layout";

function cx(...names: Array<string | false | undefined>) {
  return names.filter(Boolean).join(" ");
}

function Submenu({ depth = 0, items }: { depth?: number; items: NavItem[] }) {
  const styles = useLayoutStyles();

  return (
    <Box component="ul" className={cx(styles.submenu, depth > 0 && styles.submenuNested)}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);

        return (
          <Box component="li" key={`${depth}-${item.label}`} className={styles.submenuItem}>
            {item.href ? (
              <MuiLink href={item.href} underline="none" className={styles.submenuLink}>
                {item.label}
              </MuiLink>
            ) : (
              <Box className={styles.submenuLabel}>
                {item.label}
                {hasChildren ? <KeyboardArrowDownIcon className={styles.submenuChevron} /> : null}
              </Box>
            )}
            {hasChildren ? <Submenu items={item.children!} depth={depth + 1} /> : null}
          </Box>
        );
      })}
    </Box>
  );
}

export function SiteHeader() {
  const styles = useLayoutStyles();

  return (
    <AppBar position="sticky" color="inherit" elevation={0} className={styles.appBar}>
      <Box className={styles.topBar}>
        <Container maxWidth={false} className={styles.headerContainer}>
          <Toolbar disableGutters className={styles.topToolbar}>
            <Box className={styles.topLinks}>
              <MuiLink href="mailto:whl@tivityhealth.com" underline="none" className={styles.emailLink}>
                whl@tivityhealth.com
              </MuiLink>
              <MuiLink href="https://www.linkedin.com/company/wholehealthliving" underline="none" className={styles.socialLink}>
                <LinkedInIcon className={styles.socialIcon} />
              </MuiLink>
            </Box>
            <IconButton aria-label="Open menu" size="small" className={styles.mobileMenuButton}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </Box>

      <Container maxWidth={false} className={cx(styles.headerContainer, styles.navContainer)}>
        <Toolbar disableGutters className={styles.mainToolbar}>
          <MuiLink href="/" underline="none" color="inherit" aria-label="WholeHealth Living home" className={styles.logoLink}>
            <Box
              component="img"
              src="/images/whl-logo-20221201.svg"
              alt="WholeHealth Living"
              className={styles.logo}
            />
          </MuiLink>

          <Box component="nav" aria-label="Primary navigation" className={styles.nav}>
            <Box component="ul" className={styles.navList}>
              {navItems.map((item) => {
                const hasChildren = Boolean(item.children?.length);

                return (
                  <Box component="li" key={item.label} className={styles.navItem}>
                    <MuiLink href={item.href ?? "#"} underline="none" className={styles.navLink}>
                      {item.label}
                      {hasChildren ? <KeyboardArrowDownIcon className={styles.chevron} /> : null}
                    </MuiLink>
                    {hasChildren ? <Submenu items={item.children!} /> : null}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <IconButton aria-label="Open main navigation" className={styles.hiddenMenuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export function SiteFooter() {
  const styles = useLayoutStyles();

  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="xl" className={styles.footerContainer}>
        <Box>
          <Typography className={styles.footerBrand}>WholeHealth Living</Typography>
          <Typography className={styles.footerCopy}>Physical medicine and integrative health solutions.</Typography>
        </Box>

        <Box className={styles.footerLinks}>
          <MuiLink href="mailto:whl@tivityhealth.com" underline="hover" className={styles.footerLink}>
            whl@tivityhealth.com
          </MuiLink>
          <MuiLink href="/privacy-policy" underline="hover" className={styles.footerLink}>
            Privacy Policy
          </MuiLink>
          <MuiLink href="/terms-of-use" underline="hover" className={styles.footerLink}>
            Terms of Use
          </MuiLink>
        </Box>
      </Container>
    </Box>
  );
}
