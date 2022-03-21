import { useContext } from 'react';

import { BooksContext  } from '../context/BooksContext';

const BooksList = () => {
  const { booksData } = useContext(BooksContext);

  return (
    <div>
      <ul>
      {booksData && booksData.works.map((book) => (
        <li key={book.key}>
          {book.title} by {book.authors[0].name}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default BooksList;
