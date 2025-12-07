import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphi.api";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyApi<GiphyResponse>('search', {
        params: {
            q:query,
            limit: 10,
            //api_key: 'UfW0nzXot23iHJlN9lfCu3JeKILagQ1Y'
        }
    })
    console.log(response.data);

    return response.data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: parseInt(gif.images.original.width),
        height: parseInt(gif.images.original.height),
    }))
};