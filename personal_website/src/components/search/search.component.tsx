import './search.style.scss';

import { handleSearch } from '@/actions/search/handle.action';

export default function SearchBar() {
  return (
    <div className="search-container">
      <form action={handleSearch}>
        <div className="input-container">
          <input type="text" name="searchTerm" placeholder="Search..." />
          <div className="neon-line" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
