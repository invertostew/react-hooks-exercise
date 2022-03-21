import { createContext } from 'react';

export const BooksContext = createContext();

export const BooksProvider = ({ value, children }) => {
  return (
    <BooksContext.Provider value={value}>
      {children}
    </BooksContext.Provider>
  )
};
