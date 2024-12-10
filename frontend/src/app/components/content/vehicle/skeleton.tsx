import { Box, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      gap="16px"
    >
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width={600}
            height={500}
          />
        ))}
    </Box>
  );
};

export default CardSkeleton;
