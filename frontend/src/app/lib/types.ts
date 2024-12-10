import { Vehicle } from "../components/content/vehicle/types";

export type Response = {
  vehicles: Vehicle[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
  };
};
