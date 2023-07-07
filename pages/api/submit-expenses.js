// pages/api/submit-expenses.js
import prisma from '../../lib/prisma';

export default async function handle(req, res) {
  const { income, rent, freelanceIncome, expenses } = req.body;

  const parsedIncome = parseFloat(income) || 0;
  const parsedRent = parseFloat(rent) || 0;

  const result = await prisma.budget.create({
    data: {
      monthlyIncome: parsedIncome,
      rent: parsedRent,
      freelanceIncome: parseFloat(freelanceIncome),
      expenses: parseFloat(expenses),
    },
  });

  res.json(result);
}
