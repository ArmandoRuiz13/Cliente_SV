/*
  Warnings:

  - You are about to drop the `ExplorerInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ExplorerInfo";

-- CreateTable
CREATE TABLE "missionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "mainStack" VARCHAR(255) NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "missionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "missionCommander_name_key" ON "missionCommander"("name");
