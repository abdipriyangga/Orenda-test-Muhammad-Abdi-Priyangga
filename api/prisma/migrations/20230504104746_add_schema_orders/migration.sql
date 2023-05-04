-- AlterTable
ALTER TABLE "products" ADD COLUMN     "ordersId" INTEGER;

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "orderNumber" VARCHAR(255),
    "discount" DOUBLE PRECISION,
    "total" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customersId" INTEGER,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
