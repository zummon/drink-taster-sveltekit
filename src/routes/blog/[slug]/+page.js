import { getBlog } from "../../../lib/getBlogs";

export const prerender = true;

export const load = async ({ params }) => {
	let md = await getBlog(params.slug)

	return {
		...md
	}
}