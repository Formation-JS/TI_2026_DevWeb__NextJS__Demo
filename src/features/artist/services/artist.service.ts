import { Artist, ArtistData } from '@/@types/artiste';

const ArtistService = {

  getAll: async (offset = 0, limit = 5): Promise<Artist[]> => {
    const page = Math.floor(offset / limit);
    const response = await fetch(`http://localhost:8082/artist?_page=${page}&_limit=${limit}`);
    const artists: Artist[] = await response.json();

    return artists;
  },

  getById: async (id: number): Promise<Artist | null> => {
    const response = await fetch(`http://localhost:8082/artist/${id}`);

    if (!response.ok) {
      return null;
    }
    return await response.json() as Artist;
  },

  create: async (data: ArtistData) : Promise<number> => {
    const response = await fetch('http://localhost:8082/artist/', {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return (await response.json()).id;
  }

};
export default ArtistService;
