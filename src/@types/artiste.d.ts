export type Artist = {
  id: number,
  firstName: string,
  lastName: string,
  birthDate: string,
  deathDate: string | null,
  origin: string,
  categories: string[];
};