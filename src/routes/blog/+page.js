import { getBlogs } from "../../lib/getBlogs";

export const prerender = true;

export const load = async () => {
	
	return {
		title: 'Blog. Lorem.',
		description:
			'Officia, officiis. Neque, molestias! Laborum, dolor necessitatibus! Repudiandae laborum unde dolorem dolorum dicta cumque optio! Neque perspiciatis debitis quas suscipit, esse vel.',
		cover: {
			src: 'https://images.unsplash.com/photo-1607543306027-d2a0520106b7?w=1920',
			alt: 'Hot chocolate',
		},
		blogs: await getBlogs(),
	}
}