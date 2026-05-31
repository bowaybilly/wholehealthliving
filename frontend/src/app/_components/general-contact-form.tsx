import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useGeneralContactFormStyles } from "../_styles/general-contact-form/general-contact-form";

const inquiryOptions = [
  "Please Select",
  "Member",
  "Health Plan Representative",
  "Practitioner - Integrative Health Professionals",
  "Provider - Traditional Medical Professionals",
  "Marketplace Vendor",
] as const;

export default function GeneralContactForm() {
  const styles = useGeneralContactFormStyles();

  return (
    <Box component="form">
      <Stack spacing={2}>
        <TextField label="First Name" variant="outlined" fullWidth slotProps={{ inputLabel: { shrink: true } }} className={styles.squareInput} />
        <TextField label="Last Name" variant="outlined" fullWidth slotProps={{ inputLabel: { shrink: true } }} className={styles.squareInput} />
        <TextField label="Email" variant="outlined" fullWidth slotProps={{ inputLabel: { shrink: true } }} className={styles.squareInput} />
        <Box>
          <Typography className={styles.formLabel}>I am a:</Typography>
          <Select defaultValue="Please Select" fullWidth className={styles.select}>
            {inquiryOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <TextField label="Message" variant="outlined" fullWidth multiline rows={5} slotProps={{ inputLabel: { shrink: true } }} className={styles.squareInput} />
        <Button type="button" variant="contained" fullWidth className={styles.submitButton}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
