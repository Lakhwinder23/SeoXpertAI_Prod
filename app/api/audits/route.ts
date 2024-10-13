import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { projectId, seoScore, performance } = await request.json();

  if (!projectId || !seoScore || !performance) {
    return NextResponse.json({ error: 'Project ID, SEO Score, and Performance are required' }, { status: 400 });
  }

  try {
    const audit = await prisma.audit.create({
      data: {
        projectId,
        seoScore,
        performance,
      },
    });

    return NextResponse.json({ audit });
  } catch (error) {
    console.error('Error creating audit:', error);
    return NextResponse.json({ error: 'Error creating audit' }, { status: 500 });
  }
}
