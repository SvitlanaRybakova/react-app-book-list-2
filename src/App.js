import BookLlist from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookLlist />
      </BookContextProvider>
    </div>
  );
}

export default App;
