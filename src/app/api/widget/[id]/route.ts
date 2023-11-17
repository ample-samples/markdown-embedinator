import prisma from '@/lib/prisma'

async function getArticles() {
	const articles = await prisma.article.findMany();
	return articles;
}

export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request, { params }: { params: { id: string } }) {
	return Response.json({ data: params.id, articles: await getArticles() });
}
