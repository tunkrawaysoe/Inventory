import { PrismaClient } from '../generated/prisma';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) => {
    const modelName = path.basename(fileName, path.extname(fileName));
    // Capitalize model name to match Prisma client property
    return modelName.charAt(0).toUpperCase() + modelName.slice(1);
  });

  for (const modelName of modelNames) {
    const model: any = prisma[modelName as keyof typeof prisma];
    if (model) {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } else {
      console.error(
        `Model ${modelName} not found. Please ensure the model name is correctly specified.`
      );
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, 'seedData');

  // Delete dependent records first to avoid FK constraint errors
  const deleteOrder = [
    'sales.json',
    'purchases.json',
    'expenseByCategory.json',
    'salesSummary.json',
    'purchaseSummary.json',
    'expenseSummary.json',
    'products.json',
    'users.json',
    'expenses.json',
  ];

  // Seed parents first, then dependents
  const seedOrder = [
    'products.json',
    'users.json',
    'expenses.json',
    'expenseSummary.json',
    'expenseByCategory.json',
    'sales.json',
    'salesSummary.json',
    'purchases.json',
    'purchaseSummary.json',
  ];

  // Delete all data in correct order
  await deleteAllData(deleteOrder);

  // Seed data in correct order
  for (const fileName of seedOrder) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const modelName = path.basename(fileName, path.extname(fileName));
    const model: any = prisma[modelName.charAt(0).toUpperCase() + modelName.slice(1) as keyof typeof prisma];

    if (!model) {
      console.error(`No Prisma model matches the file name: ${fileName}`);
      continue;
    }

    for (const data of jsonData) {
      await model.create({
        data,
      });
    }

    console.log(`Seeded ${modelName} with data from ${fileName}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
