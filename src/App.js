import { useEffect, useState } from 'react';
import axios from 'axios';

import { BooksProvider } from './context/BooksContext';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';

function App() {
  const [subject, setSubject] = useState('thriller');
  const [booksData, setBooksData] = useState(null);

  useEffect(() => {
    axios.get(`http://openlibrary.org/subjects/${subject}.json?limit=5`)
      .then((res) => {
        setBooksData(res.data);
      })
      .catch((err) => {
        alert('There has been an error.');
      });
  }, [subject]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  }

  return (
    <BooksProvider value={{ booksData, handleSubjectChange }}>
      <div>
        <Header />
        <BooksContainer />
      </div>
    </BooksProvider>
  );
}

export default App;
