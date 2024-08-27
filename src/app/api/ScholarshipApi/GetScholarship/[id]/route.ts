// pages/api/ScholarshipApi/GetScholarship/[applicationNumber]/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ScholarshipDb, Scholarship_Table } from '@/db/schema/scholarship/scholarshipData';
import { eq } from 'drizzle-orm';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { applicationNumber } = req.query;

    try {
      const scholarship = await ScholarshipDb.select()
        .from(Scholarship_Table)
        .where(eq(Scholarship_Table.applicationNumber, Number(applicationNumber)))
        .limit(1);

      if (scholarship.length === 0) {
        return res.status(404).json({ message: 'Scholarship not found' });
      }

      res.status(200).json(scholarship[0]);
    } catch (error) {
      console.error('Error fetching scholarship:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}