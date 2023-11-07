console.log(`hi`)
const main = document.querySelector(`main`);

const renderSingleRecipe = async (name) => {
	const response = await fetch (`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes/${name}`)
	const singleRecipe = await response.json();
	console.log(singleRecipe.data.imageUrl)
	console.log(singleRecipe.data)
	const html = `
	<h2> Recipe <h2>
	<h2> ${singleRecipe.data.name} </h2>
	
	<img src="${singleRecipe.data.imageUrl}" alt="${singleRecipe.data.name}">
	<br/>
	
	<button>Back to Recipes</button>`
	// console.log(singleRecipe);
	main.innerHTML = html;

	const button = document.querySelector('button');

	button.addEventListener(`click`, () => {
		getRecipes();
	})

}

const getRecipes = async () => {
	const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes`);
	const recipesJSON = await response.json();
	const recipes = recipesJSON.data;

	renderAllRecipes(recipes);
}

	const renderAllRecipes = (recipeArray) => {

		const h2 = document.createElement(`h2`);
		const list = document.createElement('ul');
		
		main.replaceChildren(h2);
		main.appendChild(list);

		// const recipeNames = recipeArray.map((singleRecipe) => {
		// 	return `${singleRecipe.name}`
		// })

		recipeArray.forEach((recipe) => {
			const li = document.createElement(`li`);
			li.innerText = `${recipe.name}`;
		 	li.id = `${recipe.id}`
			list.appendChild(li);
			
			li.addEventListener(`click`, () => {
				renderSingleRecipe(li.id);
			})
		})

		// ))
		
		// for (i = 0; i < recipeArray.length; i++) {
		// 	const li = document.createElement(`li`);
		// 	li.innerText = `${recipeArray[i].name}`;
		// 	li.id = `${recipeArray[i].id}`
		// 	list.appendChild(li);
			
		// 	li.addEventListener(`click`, () => {
		// 		renderSingleRecipe(li.id);
		// 	})
		// }
	}

getRecipes();