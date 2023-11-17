export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request, { params }: { params: { id: string } }) {
	console.log(request)

	return Response.json({ data: params.id })
}
