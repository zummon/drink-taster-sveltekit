export async function load({}){
	let products = await import(`../../lib/product.json`)
	products = products.default
	return {products}
}