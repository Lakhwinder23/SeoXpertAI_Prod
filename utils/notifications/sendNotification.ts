import { prisma } from '@/lib/prisma';

export async function sendNotification(userId, message) {
  try {
    await prisma.notification.create({
      data: {
        userId,
        message,
      },
    });
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}
