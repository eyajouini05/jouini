/*
  Warnings:

  - You are about to drop the column `price` on the `subcategory` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `subcategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `subcategory` DROP COLUMN `price`,
    DROP COLUMN `title`;
