import { Vehicle } from "../components/content/vehicle/types";
import { Filter } from "../components/filter/types";

export const fetchVehicles = async (searchParams = {}) => {
  const params = new URLSearchParams(searchParams);
  const res = await fetch(
    `http://localhost:3000/api/vehicles?${params.toString()}`
  );

  return res.json() as Promise<Vehicle[]>;
};

export const fetchFilters = async () => {
  const res = await fetch("http://localhost:3000/api/filters");

  return res.json() as Promise<Filter[]>;
};
