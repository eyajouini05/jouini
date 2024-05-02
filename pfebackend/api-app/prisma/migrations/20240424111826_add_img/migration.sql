/*
  Warnings:

  - You are about to drop the `arrivals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imageUrl` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `arrivals`;
