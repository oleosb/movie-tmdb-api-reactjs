const API_KEY = 'a94916880864e8fd1275a472b2b14177';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const json = await response.json();
  return json;
};

/**
 * TOP RATED
 * UPCOMING
 * ACTION
 * COMEDY
 * HORROR
 * ROMANCE
 * DOCUMENTARY
 */

const getHomeList = async () => {
  return [
    {
      slug: 'top rated',
      title: 'TOP RATED',
      items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`),
    },
    {
      slug: 'upcoming',
      title: 'UPCOMING',
      items: await basicFetch(`/movie/upcoming?api_key=${API_KEY}`),
    },
    {
      slug: 'action',
      title: 'ACTION',
      items: await basicFetch(
        `/discover/movie?with_genres=28&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'COMEDY',
      items: await basicFetch(
        `/discover/movie?with_genres=35&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'horror',
      title: 'HORROR',
      items: await basicFetch(
        `/discover/movie?with_genres=27&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'documentary',
      title: 'DOCUMENTARY',
      items: await basicFetch(
        `/discover/movie?with_genres=99&api_key=${API_KEY}`,
      ),
    },
  ];
};

const getMovieInfo = async (movieID, type) => {
  let info = {};

  if (movieID) {
    switch (type) {
      case 'movie':
        info = await basicFetch(`/movie/${movieID}?api_key=${API_KEY}`);
        break;
      case 'tv':
        info = await basicFetch(`/tv/${movieID}?api_key=${API_KEY}`);
        break;
        default:
    }
  }

  return info;
};

const getOriginals = async () => {
  return [
    {
      slug: 'netflix originals',
      title: 'Netflix Originals',
      items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`),
    }
  ];
};

export {getHomeList, getMovieInfo, getOriginals};
