import { ArticlesPage } from '../pages/articles/articles.page';

export default async function Articles(props) {
  const {
    searchParams: { searchTerm },
  } = props;

  return <ArticlesPage search={searchTerm} />;
}
