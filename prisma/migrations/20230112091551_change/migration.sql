/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `Post_Tag` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tagId]` on the table `Post_Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_Tag_postId_key" ON "Post_Tag"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Post_Tag_tagId_key" ON "Post_Tag"("tagId");
