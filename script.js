console.log(`hi`)

const load = async () => {
	const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes`);
	const recipesJSON = await response.json();
	console.log(recipesJSON.data[0].name);

	const main = document.querySelector(`main`)
	const list = main.replaceChildren('ul')
}

load();