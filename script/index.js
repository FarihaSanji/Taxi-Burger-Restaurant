const loadCategory = () => {
  const uri = "https://taxi-kitchen-api.vercel.app/api/v1/categories";
  fetch(uri)
  .then((res) => res.json())
  .then((data) => displayCategory(data.categories));
};

const  displayCategory = (categories) => {
  // console.log(categories);
  const catContainer = document.getElementById("category-container");
catContainer.innerHTML = "";

for (let cat of categories) {
  // console.log(cat);
  const categoryCard = document.createElement("div");
  categoryCard.innerHTML = `
  <button onclick ="loadFoods(${cat.id})" class="btn justify-start  btn-block shadow btn-category">
            <img
              src="${cat.categoryImg}"
              alt=""
              class="w-10"
            /> ${cat.categoryName}
          </button>
          `
          catContainer.append(categoryCard);

} 
}; 



const loadFoods = (id) => {
  const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
   fetch(url)
  .then((res) => res.json()) //promise of response
  .then((data) => displayFoods(data.foods));
  
};

const displayFoods = (foods) => 
{
  console.log(foods);
}
//  {
//       "id": 1,
//       "categoryName": "Beef",
//       "categoryImg": "https://www.themealdb.com/images/category/beef.png"
//     }





loadCategory();




