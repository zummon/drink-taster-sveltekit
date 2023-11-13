import { getContent } from "../../../lib/getBlogs";

export const prerender = true;

export const load = async ({ params }) => {
	let md = await getContent(`blog/${params.slug}`)

	return {
		...md
	}
}