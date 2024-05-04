import { getBlogs } from "../lib/getBlogs";

export const prerender = true;

export const load = async () => {
	
	return {
		title: 'Home. Lorem ipsum dolor sit.',
		description:
			'Libero error reprehenderit, expedita enim, praesentium animi natus modi odio ipsam nemo, quisquam voluptates? Ipsum voluptas necessitatibus culpa. Accusamus eveniet eaque cum.',
		blogs: (await getBlogs()).slice(0, 2),
	}
}