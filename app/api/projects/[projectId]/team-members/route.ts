import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { userId, role } = await request.json();
  const { projectId } = request.query;

  try {
    const member = await prisma.teamMember.create({
      data: {
        userId,
        projectId,
        role,
      },
    });
    return NextResponse.json({ member });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add team member' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { memberId } = await request.json();

  try {
    await prisma.teamMember.delete({ where: { id: memberId } });
    return NextResponse.json({ message: 'Team member removed' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove team member' }, { status: 500 });
  }
}
