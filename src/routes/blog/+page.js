import { getBlogs } from "../../lib/getBlogs";

export const prerender = true;

export const load = async () => {
	
	return {
		title: 'Blog. Lorem.',
		description:
			'Officia, officiis. Neque, molestias! Laborum, dolor necessitatibus! Repudiandae laborum unde dolorem dolorum dicta cumque optio! Neque perspiciatis debitis quas suscipit, esse vel.',
		blogs: await getBlogs(),
	}
}