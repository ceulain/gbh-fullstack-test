"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { redirect, usePathname, useSearchParams } from "next/navigation";

const Sort = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;

    params.delete("sort");
    params.append("sort", value);

    redirect(`${pathname}?${params.toString()}`);
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: "16px" }}>
      <InputLabel id="demo-simple-select-label">Tri</InputLabel>
      <Select
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={params.get("sort")?.toString()}
        label="Trier par"
        onChange={handleChange}
      >
        <MenuItem value={"year"}>Par année</MenuItem>
        <MenuItem value={"price"}>Par prix</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Sort;
