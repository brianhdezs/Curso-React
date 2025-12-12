import { useState } from "react";
import { getGifByQuery } from "../actions/get-gif-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifByQuery(query);
    setGifs(gifs);
  };

  return {
    //valores o props
    gifs,
    //metodos o funciones
    handleSearch,
    handleTermClicked,
    previousTerms,
  };
};
