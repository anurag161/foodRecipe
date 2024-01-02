const key = "1244b29088d3dd17573ef6a0ed01d9d5";
const app_id = "66338cff";

export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${key}&from=0&to=${limit}&`;

  const response = await fetch(url);

  const data = await response.json();
  console.log(data);

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${app_id}&app_key=${key}`;

  const response = await fetch(url);

  const data = await response.json();

  return data[0];
}
