import { Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return Array(4)
    .fill(null)
    .map((_, index) => (
      <Skeleton
        key={index}
        sx={{ marginBottom: "16px" }}
        variant="rectangular"
        width={600}
        height={400}
      />
    ));
};

export default CardSkeleton;
