import Vehicle from "./vehicle";
import { Grid2 } from "@mui/material";
import { fetchVehicles } from "@/app/lib/data";
import { SearchParams } from "@/app/page";
import Pagination from "../pagination";
import NoResult from "../noResult";

const ITEM_PER_PAGE = 4;
const Content = async ({ searchParams }: SearchParams) => {
  const { vehicles, meta } = await fetchVehicles(await searchParams);

  return (
    <>
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
              price={vehicle.price}
              name={name}
            />
          );
        })}
      </Grid2>
      {meta.total > ITEM_PER_PAGE && (
        <Pagination total={Math.ceil(meta.total / ITEM_PER_PAGE)} />
      )}
      {meta.total === 0 && <NoResult />}
    </>
  );
};

export default Content;
