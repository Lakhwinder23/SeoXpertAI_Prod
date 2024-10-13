import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { name, description, websiteUrl } = await request.json();

  if (!name || !websiteUrl) {
    return NextResponse.json({ error: 'Project name and website URL are required' }, { status: 400 });
  }

  try {
    const project = await prisma.project.create({
      data: {
        name,
        description,
        websiteUrl,  // Ensure website URL is saved
      },
    });

    return NextResponse.json({ project });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Error creating project' }, { status: 500 });
  }
}
