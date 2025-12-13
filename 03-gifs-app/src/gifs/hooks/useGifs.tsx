import { useRef, useState } from "react";
import { getGifByQuery } from "../actions/get-gif-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

//cache simple en memoria
//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({}).current; //usamos useRef para mantener la referencia del cache, .current para mantener el valor actual y evitar recrearlo en cada render

  const handleTermClicked = async (term: string) => {
    if (gifsCache[term]) {
      setGifs(gifsCache[term]);
      return;
    }
    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifByQuery(query);
    setGifs(gifs);

    //aqui guardamos en cache
    gifsCache[query] = gifs;
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
