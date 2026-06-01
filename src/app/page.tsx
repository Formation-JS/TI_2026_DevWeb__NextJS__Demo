import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <h1 className='text-3xl'>Home page</h1>
      <Image
        src='/great_wave__landscape.jpg'
        alt='La grosse vague'
        width={3859}
        height={2594}
        quality={50}
        className='hidden md:block'
      />
      <Image
        src='/great_wave__portrait.jpg'
        alt='La grosse vague'
        width={346}
        height={750}
        className='block md:hidden'
        quality={50}
      />
    </>
  );
}
