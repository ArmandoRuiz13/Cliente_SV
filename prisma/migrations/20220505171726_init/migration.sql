/*
  Warnings:

  - You are about to drop the `Explorer` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateTable
CREATE TABLE "ExplorerInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrrollments" INTEGER NOT NULL DEFAULT 1,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExplorerInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerInfo_name_key" ON "ExplorerInfo"("name");
