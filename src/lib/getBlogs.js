const markdowns = import.meta.glob('./content/blog/*.md');

export const getBlogs = async () => {
	let result = [];

	for (const path in markdowns) {
		await markdowns[path]().then((markdown) => {
			let content = markdown.default;
			let metadata = markdown.metadata;
			let slug = path.split('/').pop().slice(0, -3);

			result.push({
				...metadata,
				content,
				slug,
			});
		});
	}

	return result;
};
