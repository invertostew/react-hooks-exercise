import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

import Header from './components/Header';
import BooksContainer from './components/BooksContainer';

export const BooksContext = createContext();

function App() {
  const [subject, setSubject] = useState('thriller');
  const [booksData, setBooksData] = useState(null);

  useEffect(() => {
    axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
      .then((res) => {
        setBooksData(res.data);
      });
  }, [subject]);

  return (
    // <BooksContext.Provider booksData={{ booksData, setSubject}}>
      <div>
        <Header setSubject={setSubject} />
        <BooksContainer booksData={booksData} />
      </div>
    // </BooksContext.Provider>
  );
}

export default App;
