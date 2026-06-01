import ArtistService from '@/features/artist/services/artist.service';
import { delay } from '@/utils/delay.utils';
import Link from 'next/link';

export default async function ArtistListPage() {

  //! Utilisation du service dans un composant async (Serveur uniquement)
  // const artists = await ArtistService.getAll(0, 20);

  //! Exemple de solution pour attendre une animation css lors du loading
  const [artists] = await Promise.all([
    ArtistService.getAll(0, 20),
    delay(1_000)
  ]);

  return (
    <>
      <h1 className='text-3xl'>Liste des artistes</h1>
      <Link href='/artist/create' className='mb-2'>Ajouter un artiste</Link>
      {artists.map(artist => (
        <article key={artist.id} className='flex flex-col not-last:mb-2'>
          <p>{artist.firstName} {artist.lastName}</p>
          <p>Categories : {artist.categories.join(', ')}</p>
        </article>
      ))}
    </>
  );
}
