import ArtistService from '@/features/artist/services/artist.service';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ArtistDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function ArtistDetailPage({ params} : ArtistDetailPageProps) {

  const id = parseInt((await params).id);
  const artist = await ArtistService.getById(id);

  if(!artist) {
    notFound();
  }

  return (
    <>
      <h1 className='text-3xl'>Détail d'un artiste</h1>
      <Link href='/artist' className='text-yellow-700 mb-2'>Retourner à la liste</Link>
      <p>{artist.firstName} {artist.lastName}</p>
      <p>Date de naissance : {artist.birthDate}</p>
      {artist.deathDate && (
        <p>Date de moration : {artist.deathDate}</p>
      )}
    </>
  );
}
