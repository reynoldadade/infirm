-- AlterTable
ALTER TABLE "User" ADD COLUMN     "address" TEXT,
ALTER COLUMN "otherNames" DROP NOT NULL;
