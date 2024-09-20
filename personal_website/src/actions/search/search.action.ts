'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface props {
  context: string;
  data: FormData;
}

export const handleSearch = async ({ context, data }: props) => {
  const searchTerm = data.get('searchTerm')?.toString() || '';

  revalidatePath(`/${context}?searchTerm=${searchTerm}`);
  redirect(`/${context}?searchTerm=${searchTerm}`);
};
