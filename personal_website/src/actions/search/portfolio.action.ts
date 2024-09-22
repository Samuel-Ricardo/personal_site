'use server';

import { handleSearch } from './search.action';

export const handlePortfolioSearch = async (data: FormData) =>
  await handleSearch({ context: 'portfolio', data });
