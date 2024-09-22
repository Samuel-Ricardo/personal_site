import { ISearchBarProps } from '@/@types/props/search/search.props';
import './search.style.scss';

export default function SearchBar({ action }: ISearchBarProps) {
  return (
    <div className="search-container">
      <form action={action}>
        <div className="input-container">
          <input type="text" name="searchTerm" placeholder="Search..." />
          <div className="neon-line" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
