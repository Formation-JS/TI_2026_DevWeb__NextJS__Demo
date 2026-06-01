'use server';

import { ArtistData } from '@/@types/artiste';
import ArtistService from '../services/artist.service';
import { redirect } from 'next/navigation';

export type ArtistCreateState = {
  formData: FormData | null,
  errors: string | null;
};

export const artistCreateAction = async (state: ArtistCreateState, formData: FormData): Promise<ArtistCreateState> => {

  // Dumb validation
  const dataIsValid = formData.get('firstName')?.toString() !== ''
    && formData.get('lastName')?.toString() !== ''
    && formData.get('birthDate')?.toString() !== ''
    && formData.get('origin')?.toString() !== '';

  // Renvois un state si les données sont invalides
  if (!dataIsValid) {
    return {
      formData,
      errors: 'Une erreur est survenue !'
    };
  }

  // Contacter la WebAPI
  const data: ArtistData = {
    firstName: formData.get('firstName')!.toString(),
    lastName: formData.get('lastName')!.toString(),
    birthDate: formData.get('birthDate')!.toString(),
    deathDate: formData.get('deathDate')?.toString() || null,
    origin: formData.get('origin')!.toString(),
    categories: ['Batiment']
  };
  console.log(data);

  const id = await ArtistService.create(data);

  // Faire une redirection 
  redirect(`/artist/detail/${id}`);
}; 