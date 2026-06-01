import { Artist } from '@/@types/artiste';

const ArtistService = {

  // GET /posts?_page=7&_limit=20
  getAll: async (offset = 0, limit = 5) : Promise<Artist[]> => {
    const page = Math.floor(offset / limit);
    const response = await fetch(`http://localhost:8082/artist?_page=${page}&_limit=${limit}`);
    const artists : Artist[] = await response.json();

    return artists;
  },

  getById: async (id: number) : Promise<Artist | null> => {

    const response  = await fetch(`http://localhost:8082/artist/${id}`);

    if(!response.ok) {
      return null;
    }
    return await response.json() as Artist;
  }

};
export default ArtistService;
