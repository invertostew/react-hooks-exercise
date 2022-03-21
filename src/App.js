import { useEffect, useState } from 'react';
import axios from 'axios';

import { BooksContext } from './context/BooksContext';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';

function App() {
  const [subject, setSubject] = useState('thriller');
  const [booksData, setBooksData] = useState(null);

  useEffect(() => {
    axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
      .then((res) => {
        setBooksData(res.data);
      });
  }, [subject]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  return (
    <BooksContext.Provider value={{ booksData, handleSubjectChange }}>
      <div>
        <Header />
        <BooksContainer />
      </div>
    </BooksContext.Provider>
  );
}

export default App;
