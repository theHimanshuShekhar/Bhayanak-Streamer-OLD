-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "thumbUpdatedAt" DATETIME,
    "thumbNail" TEXT,
    "streamer" TEXT NOT NULL
);
INSERT INTO "new_Room" ("createdAt", "description", "id", "name", "streamer", "thumbNail", "thumbUpdatedAt") SELECT "createdAt", "description", "id", "name", "streamer", "thumbNail", "thumbUpdatedAt" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
