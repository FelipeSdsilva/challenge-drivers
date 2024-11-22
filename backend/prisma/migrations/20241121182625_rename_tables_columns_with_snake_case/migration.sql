/*
  Warnings:

  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ride` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Driver" DROP CONSTRAINT "Driver_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_customerId_fkey";

-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_driverId_fkey";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Driver";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Ride";

-- CreateTable
CREATE TABLE "tb_driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "tax_value" DOUBLE PRECISION NOT NULL,
    "min_km" DOUBLE PRECISION NOT NULL,
    "review_id" INTEGER NOT NULL,

    CONSTRAINT "tb_driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "tb_review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_ride" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "duration" TEXT NOT NULL,
    "driver_id" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_customer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tb_customer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_driver_review_id_key" ON "tb_driver"("review_id");

-- AddForeignKey
ALTER TABLE "tb_driver" ADD CONSTRAINT "tb_driver_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "tb_review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ride" ADD CONSTRAINT "tb_ride_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "tb_customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_ride" ADD CONSTRAINT "tb_ride_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "tb_driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;
