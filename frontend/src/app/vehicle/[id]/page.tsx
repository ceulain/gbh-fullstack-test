import { fetchVehicle } from "@/app/lib/data";
import { Box, Typography } from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const vehicle = await fetchVehicle(id);

  return (
    <Box margin="16px">
      {Object.entries(vehicle).map(([key, value]) => (
        <Typography key={key} variant="body2" sx={{ color: "text.secondary" }}>
          {`${key}: ${value}`}
        </Typography>
      ))}
    </Box>
  );
}
