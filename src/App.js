import './App.css';
import Homepage from './components/Homepage';
import SongContextProvider from './providers/SongContextProvider';
import ServerAddressProvider from './providers/ServerAddressProvider';

function App() {
  // utilisation de useContext pour passer serverAdress à tous les composants enfants
  return (
    <ServerAddressProvider>
      <SongContextProvider>
        <div className="App">
          <div className='main rounded shadow'>
            <Homepage></Homepage>
          </div>
      </div>
      </SongContextProvider>
    </ServerAddressProvider>
  );
}

export default App;
