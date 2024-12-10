"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

import { useRouter } from "next/navigation";

const Vehicle = ({
  id,
  name,
  description,
  index,
}: {
  id: string;
  index: number;
  name: string;
  description: string;
}) => {
  const router = useRouter();

  return (
    <Card
      key={id}
      sx={{ maxWidth: "600px", cursor: "pointer" }}
      onClick={() => router.push(`/vehicle/${id}`)}
    >
      <CardMedia>
        <Image
          priority={index === 0}
          src="/images/car-placeholder.svg"
          width={600}
          height={400}
          alt={`${name} image`}
        ></Image>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Vehicle;
