import prisma from "@/lib/prisma";

async function getArticleByUUID(id: string) {
  const article = await prisma.article.findUnique({
    where: {
      id: id,
    },
  });
  return article?.body;
}

async function postArticle() {
	const text = await prisma?.article.create({
		data: {
			body
		}
	})
	return
}

export const dynamic = "force-dynamic"; // defaults to force-static

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  return Response.json(await getArticleByUUID(params.id));
}

export async function POST(
	request: Request,
	response: Response,
	
) {
	return Response.json(await postArticle())
}
