import React, {createContext} from 'react';

const SearchContext = createContext<SearchState>({
  keyword: '',
  onChangeText: () => {},
});

interface SearchState {
  keyword: string;
  onChangeText: (text: string) => void;
}

interface SearchContextProviderProps {
  children: React.ReactNode;
}

export function SearchContextProvider({children}: SearchContextProviderProps) {
  const [keyword, onChangeText] = React.useState('');

  return (
    <SearchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
