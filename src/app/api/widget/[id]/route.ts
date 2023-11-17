import prisma from "@/lib/prisma";

async function getArticleByUUID(id: string) {
	const article = await prisma.article.findUnique({
		where: {
			id: id,
		}
	});
	return article?.body;
}

async function postArticle(userMd: string) {
  let body;
	const text = await prisma.article.create({
		data: {
			body: userMd
		}
	})
	return text;
}

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(request: Request, { params }: { params: { id: string } }) {

	return Response.json({ data: await getArticleByUUID(params.id) });
}

export async function POST(request: Request, response: Response,) {
	const req = await request.json()
	console.log(req)

	const res = await postArticle(req.body)
	return Response.json(res.body)
}
