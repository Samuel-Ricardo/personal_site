'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const handlePortfolioSearch = async (formData: FormData) => {
  const searchTerm = formData.get('searchTerm')?.toString() || '';

  revalidatePath(`/portfolio?searchTerm=${searchTerm}`);
  redirect(`/portfolio?searchTerm=${searchTerm}`);
};
