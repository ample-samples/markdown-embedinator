import prisma from "@/lib/prisma";

async function postArticle(userMd: string) {
	let body;
	const text = await prisma?.article.create({
		data: {
			body: userMd
		}
	})
	return text;
}


export async function POST(request: Request, response: Response,) {
	const req = await request.json()
	console.log(req)

	const res = await postArticle(req.body)
	return Response.json(res)
}
