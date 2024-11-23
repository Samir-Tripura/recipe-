const searchBox = document.querySelector(".searchBox");
const searchBTN = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");


const fetchRecipes = async (query) =>{
    recipeContainer.innerHTML = "<h2>Fetching recipes</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const response = await data.json();
    

    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span>Dish</P>
        <p>Belongs to <span>${meal.strCategory}</span> Category</P>
        `
        const button = document.createElement('button');
        button.textContent = "view recipe";
        recipeDiv.appendChild(button);

        recipeContainer.appendChild(recipeDiv);
        
    });
};


searchBTN.addEventListener("click",(e) =>{
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
});