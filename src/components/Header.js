import { useContext } from 'react'

import { BooksContext } from '../context/BooksContext';

const Header = () => {
  const { handleSubjectChange } = useContext(BooksContext);

  return (
    <div>
      <h1>Book Search</h1>
      <select onChange={handleSubjectChange}>
        <option value="thriller">Thriller</option>
        <option value="fantasy">Fantasy</option>
        <option value="cats">Cats</option>
        <option value="science">Science</option>
      </select>
    </div>
  );
}

export default Header;
