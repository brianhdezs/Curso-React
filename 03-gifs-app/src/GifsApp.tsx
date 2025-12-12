import { GifGrid } from "./gifs/GifGrid";
import { PreviousSearches } from "./gifs/GifsList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { CustomSearchBar } from "./shared/components/CustomSearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

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
      <GifGrid gifs={gifs} />
    </>
  );
};
