-- CreateTable
CREATE TABLE "Budget" (
    "id" SERIAL NOT NULL,
    "rent" INTEGER NOT NULL,
    "expenses" INTEGER NOT NULL,
    "monthlyIncome" INTEGER NOT NULL,
    "freelanceIncome" INTEGER NOT NULL,
    "leftoverMoney" INTEGER NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);
