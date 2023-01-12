/*
  Warnings:

  - The primary key for the `Post_Tag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Post_Tag` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_Tag_postId_key";

-- DropIndex
DROP INDEX "Post_Tag_tagId_key";

-- AlterTable
ALTER TABLE "Post_Tag" DROP CONSTRAINT "Post_Tag_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Post_Tag_pkey" PRIMARY KEY ("postId", "tagId");
