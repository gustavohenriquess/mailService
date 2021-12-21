-- CreateTable
CREATE TABLE "EmailBox" (
    "id_db" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "secure" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "EmailBox_pkey" PRIMARY KEY ("id_db")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailBox_id_key" ON "EmailBox"("id");
