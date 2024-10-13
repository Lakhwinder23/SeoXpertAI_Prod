import { NextResponse } from 'next/server';

const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY; // Store this key in your environment variables

export async function POST(request: Request) {
  const { projectId, websiteUrl } = await request.json();

  if (!projectId || !websiteUrl) {
    return NextResponse.json({ error: 'Project ID and Website URL are required' }, { status: 400 });
  }

  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${websiteUrl}&key=${API_KEY}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const seoScore = data.lighthouseResult.categories.seo.score * 100;
    const performance = data.lighthouseResult.categories.performance.score * 100;

    // Save the audit to your database (using Prisma)
    const audit = await prisma.audit.create({
      data: {
        projectId,
        seoScore,
        performance,
      },
    });

    return NextResponse.json({ audit });
  } catch (error) {
    console.error('Error fetching audit data:', error);
    return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 500 });
  }
}
