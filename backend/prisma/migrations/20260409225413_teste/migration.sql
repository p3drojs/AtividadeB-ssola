-- CreateTable
CREATE TABLE "receitas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tempoPreparo" INTEGER NOT NULL,
    "custoAproximado" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "receitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "receitaId" INTEGER NOT NULL,

    CONSTRAINT "Ingredientes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ingredientes" ADD CONSTRAINT "Ingredientes_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
