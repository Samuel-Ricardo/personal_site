'use server';

import { handleSearch } from './search.action';

export const handleArticleSearch = async (data: FormData) =>
  handleSearch({
    context: 'articles',
    data,
  });
