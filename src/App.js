import './App.css';
import SearchBar from './SearchBar.js'
import SearchResults from './SearchResults.js'
import Playlist from './Playlist.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      
      <main className="App-body">
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
