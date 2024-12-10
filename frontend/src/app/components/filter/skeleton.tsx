import { Box, Skeleton } from "@mui/material";

const Rectangular = () => (
  <Skeleton variant="rectangular" width={134} height={42} />
);

const FilterSkeleton = () => (
  <Box display="flex" flexDirection="column" gap="16px" marginRight="16px">
    {Array(25)
      .fill(null)
      .map((_, index) => (
        <Rectangular key={index} />
      ))}
  </Box>
);

export default FilterSkeleton;
