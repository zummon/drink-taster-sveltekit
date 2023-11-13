import { getContent } from "../../lib/getBlogs";

export const prerender = true;

export const load = async () => {
	let md = await getContent('about')

	return {
		...md
	}
}