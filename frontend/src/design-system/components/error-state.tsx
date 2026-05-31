import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";

type ErrorStateProps = {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function ErrorState({
  title = "Something went wrong",
  message = "We could not complete your request. Please try again.",
  actionLabel = "Try again",
  onAction,
}: ErrorStateProps) {
  return (
    <Container maxWidth="md" component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Stack spacing={3}>
        <Box>
          <Typography component="h1" variant="h3" color="primary.dark" gutterBottom>
            {title}
          </Typography>
          <Alert severity="error">{message}</Alert>
        </Box>
        {onAction ? (
          <Box>
            <Button type="button" variant="contained" onClick={onAction}>
              {actionLabel}
            </Button>
          </Box>
        ) : null}
      </Stack>
    </Container>
  );
}
