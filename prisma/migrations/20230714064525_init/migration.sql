-- CreateTable
CREATE TABLE "Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbUpdatedAt" DATETIME NOT NULL,
    "thumbNail" TEXT NOT NULL,
    "streamer" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Viewer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "roomId" TEXT,
    CONSTRAINT "Viewer_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
