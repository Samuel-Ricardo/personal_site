import { ArticlesPage } from '../pages/articles/articles.page';

export default async function Articles(props) {
  const {
    searchParams: { searchTerm },
  } = props;

  return (
    <div className="page-container">
      <ArticlesPage search={searchTerm} />
    </div>
  );
}
