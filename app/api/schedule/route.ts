import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { projectId, frequency } = await request.json();

  if (!projectId || !frequency) {
    return NextResponse.json({ error: 'Project ID and frequency are required' }, { status: 400 });
  }

  const nextRunDate = getNextRunDate(frequency);

  try {
    const schedule = await prisma.reportSchedule.create({
      data: {
        projectId,
        frequency,
        nextRun: nextRunDate,
      },
    });

    return NextResponse.json({ schedule });
  } catch (error) {
    console.error('Error scheduling report:', error);
    return NextResponse.json({ error: 'Error scheduling report' }, { status: 500 });
  }
}

function getNextRunDate(frequency) {
  const now = new Date();
  switch (frequency) {
    case 'Daily':
      return new Date(now.setDate(now.getDate() + 1));
    case 'Weekly':
      return new Date(now.setDate(now.getDate() + 7));
    case 'Monthly':
      return new Date(now.setMonth(now.getMonth() + 1));
    default:
      return now;
  }
}
