
const loadMeals = (search) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
    .then(res => res.json())
        .then(data => displayMeals(data.meals))

}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
        mealContainer.innerHTML = '';
    meals.forEach(meal =>{
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
              <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
              <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(1,200)}</p>
              </div>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    })
}

    const searchFood =()=>{
        const searchField = document.getElementById('search-field');
        const searchTex = searchField.value;
        loadMeals(searchTex);
        searchField.value ='';
}

const loadMealDetails = (idMeal) => {
        // console.log('get detail of id', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => display2MealDetails(data.meals[0]));
}
const display2MealDetails = meal => {
    const detailContainer = document.getElementById('details-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement ('div')
    mealDiv.classList.add('card')
    mealDiv.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    detailContainer.appendChild(mealDiv)
}

loadMeals('');