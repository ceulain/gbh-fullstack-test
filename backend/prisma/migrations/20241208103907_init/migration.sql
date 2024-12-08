-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('SUV', 'SEDAN', 'TRUCK', 'SPORTS', 'LUXURY', 'ELECTRIC');

-- CreateEnum
CREATE TYPE "FuelType" AS ENUM ('GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID', 'PLUGIN_HYBRID');

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "type" "VehicleType" NOT NULL,
    "price" INTEGER NOT NULL,
    "fuelType" "FuelType" NOT NULL,
    "transmission" TEXT NOT NULL,
    "mileage" INTEGER,
    "features" TEXT[],
    "images" TEXT[],
    "description" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);
