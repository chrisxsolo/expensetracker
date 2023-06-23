// pages/api/data.js
import prisma from '../../lib/prisma'

export default async function handle(req, res) {
  // Find the latest Budget record in the database
  const latestBudget = await prisma.budget.findFirst({
    orderBy: {
      id: 'desc',
    },
  })
  res.json(latestBudget)
}
