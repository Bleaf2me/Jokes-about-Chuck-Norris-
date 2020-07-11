export default class ChuckService {
  _apiBase = `https://api.chucknorris.io/jokes/`;

  getJoke = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  }

  getRandomJoke = async () => {
    const res = await this.getJoke(`random/`);
    return this._transformJoke(res);
  }

  getByCategory = async (category) => {
    const res = await this.getJoke(`random?category=${category}`);
    return this._transformJoke(res);
  }
  
  getByTextSearch = async (query) => {
    const res = await this.getJoke(`search?query=${query}`);
    return res.result.map(this._transformJoke);
  }

  getListOfCategories = async () => {
    const res = await this.getJoke(`categories`);
    return res;
  }
 
  _transformJoke = (joke) => {

    return {
      id: joke.id,
      url: joke.url,
      value: joke.value,
      updated: joke.updated_at,
      categories: joke.categories,
      created: joke.created_at
    }
  } 
}
