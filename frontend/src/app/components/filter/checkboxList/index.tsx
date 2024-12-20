"use client";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { redirect, usePathname, useSearchParams } from "next/navigation";

type Props = {
  name: string;
  filter: { value: string }[];
  type: string;
};

const CheckboxList = ({ name, filter, type }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleChange = (value: string, type: string) => {
    params.delete("page");

    if (params.get(type) === String(value)) {
      params.delete(type, value);
    } else {
      params.set(type, value);
    }

    redirect(`${pathname}?${params.toString()}`);
  };

  return (
    <FormControl key={name}>
      <FormLabel component="h3">{name}</FormLabel>
      <FormGroup>
        {filter.map(({ value }) => {
          const isChecked = params.get(type) === String(value);

          return (
            <FormControlLabel
              checked={isChecked}
              key={value}
              control={
                <Checkbox
                  name={value}
                  onChange={() => handleChange(value, type)}
                />
              }
              label={value}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxList;
