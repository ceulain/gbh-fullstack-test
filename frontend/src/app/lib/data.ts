import { notFound } from "next/navigation";
import { Vehicle } from "../components/content/vehicle/types";
import { Filter } from "../components/filter/types";

export const fetchVehicles = async (searchParams = {}) => {
  const params = new URLSearchParams(searchParams);
  const res = await fetch(
    `http://localhost:3000/api/vehicles?${params.toString()}`
  );

  const vehicles = res.json() as Promise<Vehicle[]>;

  if (!vehicles) notFound();

  return vehicles;
};

export const fetchFilters = async () => {
  const res = await fetch("http://localhost:3000/api/filters");

  return res.json() as Promise<Filter[]>;
};

export const fetchVehicle = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);
  const vehicle: Vehicle = await res.json();

  if (!vehicle) notFound();

  return vehicle;
};
