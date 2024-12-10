import { notFound } from "next/navigation";
import { Vehicle } from "../components/content/vehicle/types";
import { Filter } from "../components/filter/types";
import { Response } from "./types";

export const fetchVehicles = async (searchParams = {}) => {
  const params = new URLSearchParams(searchParams);
  const res = await fetch(
    `http://localhost:3000/api/vehicles?${params.toString()}`
  );

  if (!res.ok) {
    notFound();
  }

  return res.json() as Promise<Response>;
};

export const fetchFilters = async () => {
  const res = await fetch("http://localhost:3000/api/filters");

  if (!res.ok) {
    notFound();
  }

  return res.json() as Promise<Filter[]>;
};

export const fetchVehicle = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);

  if (!res.ok) {
    notFound();
  }

  const vehicle: Vehicle = await res.json();
  return vehicle;
};
