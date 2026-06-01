'use client';
import { useActionState, useId } from 'react';
import { artistCreateAction } from '../actions/artist.action';


export default function ArtistCreateForm() {
  const idx = useId();

  const [state, handleSubmit, isPending] = useActionState(artistCreateAction, { formData: null, errors: null });
  console.log(state);

  return (
    <form action={handleSubmit} className='flex flex-col gap-1'>
      <div>
        <label htmlFor={idx + 'firstName'}>Prénom : </label>
        <input id={idx + 'firstName'} name='firstName' type='text'
          className='p-0.5 border border-pink-800 rounded'
          defaultValue={state.formData?.get('firstName')?.toString()} />
      </div>
      <div>
        <label htmlFor={idx + 'lastName'}>Nom : </label>
        <input id={idx + 'lastName'} name='lastName' type='text'
          className='p-0.5 border border-pink-800 rounded'
          defaultValue={state.formData?.get('lastName')?.toString()} />
      </div>
      <div>
        <label htmlFor={idx + 'birthDate'}>Date de naissance : </label>
        <input id={idx + 'birthDate'} name='birthDate' type='text'
          className='p-0.5 border border-pink-800 rounded'
          defaultValue={state.formData?.get('birthDate')?.toString()} />
      </div>
      <div>
        <label htmlFor={idx + 'origin'}>Origine : </label>
        <input id={idx + 'origin'} name='origin' type='text'
          className='p-0.5 border border-pink-800 rounded'
          defaultValue={state.formData?.get('origin')?.toString()} />
      </div>
      <div>
        <button type='submit'
          className='bg-pink-800 text-cyan-300 px-1 py-0.5 rounded'
         disabled={isPending}>Valider</button>
        {state.errors && (
          <p className='text-pink-700'>{state.errors}</p>
        )}
      </div>
    </form>
  );

}