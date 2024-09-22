import { ArticleShelf } from '@/app/pages/articles/shelf/article.page';
import '../../globals.scss';

export default async function Article(props) {
  const { id } = props.params;

  return (
    <div className="page-container">
      <ArticleShelf id={decodeURIComponent(id)} />
    </div>
  );
}
