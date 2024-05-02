/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `category` table. All the data in the column will be lost.
  - You are about to drop the `subcategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `Category_subCategoryId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `subCategoryId`;

-- DropTable
DROP TABLE `subcategory`;
