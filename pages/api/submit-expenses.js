// pages/api/submit-expenses.js
import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  const { income, rent, freelanceIncome, expenses } = req.body
  const result = await prisma.budget.create({
    data: {
      monthlyIncome: income,
      rent: rent,
      freelanceIncome: freelanceIncome,
      expenses: expenses,
    },
  })
  res.json(result)
}
