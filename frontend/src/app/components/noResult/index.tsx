import { Button, Typography } from "@mui/material";

const NoResult = () => (
  <>
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      Désolé, aucun véhicule trouve.
    </Typography>

    <Button href="/">Retourner à la page d&apos;accueil</Button>
  </>
);

export default NoResult;
