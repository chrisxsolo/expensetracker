import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Delete all data from the tables you want to reset
      await prisma.budget.deleteMany();

      // Create a new entry with default values
      await prisma.budget.create({
        data: {
          monthlyIncome: 0,
          rent: 0,
          freelanceIncome: 0,
          expenses: 0,
          // Add a default value for rent as well
        },
      });

      // Send a success response
      res.status(200).json({ message: 'Database reset successful' });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: 'Database reset failed' });
    }
  } else {
    // Handle invalid HTTP methods
    res.status(405).end();
  }
}
