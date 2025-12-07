import { useState } from "react";
import { GifGrid } from "./gifs/GifGrid";
import { PreviousSearches } from "./gifs/GifsList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearchBar } from "./shared/components/CustomSearchBar";
import { getGifByQuery } from "./gifs/actions/get-gif-by-query.actions";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["Goku"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    const gifs = await getGifByQuery(query);
    console.log({ gifs });
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Comparte el gif perfecto"
      />

      {/* Search */}
      <CustomSearchBar
        inputPlaceholder="Buscar gif"
        buttonText="Buscar"
        onQuery={handleSearch}
      />

      {/* Busquedas previas */}
      <PreviousSearches
        title="Busquedas recientes"
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gif Grid */}
      <GifGrid gifs={mockGifs} />
    </>
  );
};
