import Vehicle from "./vehicle";
import { Grid2 } from "@mui/material";
import { fetchVehicles } from "@/app/lib/data";
import { SearchParams } from "@/app/page";

const Content = async ({ searchParams }: SearchParams) => {
  const vehicles = await fetchVehicles(await searchParams);

  return (
    <Grid2
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {vehicles.map((vehicle, index) => {
        const name = `${vehicle.manufacturer} - ${vehicle.model} - ${vehicle.year}`;
        const id = vehicle.id;
        return (
          <Vehicle
            index={index}
            key={id}
            id={id}
            description={vehicle.description}
            name={name}
          />
        );
      })}
    </Grid2>
  );
};

export default Content;
