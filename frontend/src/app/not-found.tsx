import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">Not Found</Typography>
      <Link href="/">Retourner à la page d&apos;accueil</Link>
    </Box>
  );
}
