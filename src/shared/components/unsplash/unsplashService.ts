import type { Unsplash } from './types';

// const key = process.env.REACT_APP_UNSPLASH_KEY;
const key = 's7aJSoJDMeVwt95d2yedWRSv0aTfU-Cr-yigYebJQS8';
// const secret = 'EH-KJ4I-BzS_txmIOfGepAZ-O22Yy_nyAevMFAJOp5k';

const searchImage = async (query: string) => {
  const res = await fetch(`https://api.unsplash.com/search/photos?client_id=${key}&query=${query}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const { results }: Unsplash.RootObject = await res.json();
  return results;
};

export default searchImage;
