import BookLlist from './components/BookList'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'
import BookForm from './components/BookForm'

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookLlist />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
