"use client";

import MuiPagination from "@mui/material/Pagination";
import { redirect, usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ total }: { total: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", String(value));
    redirect(`${pathname}?${params.toString()}`);
  };

  return (
    <MuiPagination
      count={total}
      size="medium"
      onChange={handlePage}
      sx={{ margin: "16px" }}
    />
  );
};

export default Pagination;
