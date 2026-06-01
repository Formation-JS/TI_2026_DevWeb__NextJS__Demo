
export default async function ArtistListLoading() {

  return (
    <>
      <h1 className='text-3xl'>Liste des artistes</h1>
      <article className='flex flex-col gap-0.5 mb-2'>
        <p className='h-5 w-28 rounded-[0.3ch] bg-gray-200'></p>
        <p className='h-5 w-44 rounded-[0.3ch] bg-gray-200'></p>
      </article>
      <article className='flex flex-col gap-0.5'>
        <p className='h-5 w-32 rounded-[0.3ch] bg-gray-200'></p>
        <p className='h-5 w-40 rounded-[0.3ch] bg-gray-200'></p>
      </article>
    </>
  );
}
