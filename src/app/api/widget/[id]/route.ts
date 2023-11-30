import prisma from "@/lib/prisma";

async function getArticleByUUID(id: string) {
	const article = await prisma?.article.findUnique({
		where: {
			id: id,
		}
	});
	return article?.body;
}

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request, { params }: { params: { id: string } }) {
	console.log("params", params)
	return Response.json({ data: await getArticleByUUID(params.id) });
}

