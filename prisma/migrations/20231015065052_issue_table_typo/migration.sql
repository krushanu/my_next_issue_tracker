/*
  Warnings:

  - You are about to drop the column `updatedAi` on the `Issue` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `updatedAi`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
