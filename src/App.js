import './App.css';
import Homepage from './components/Homepage';
import SongContextProvider from './providers/SongContextProvider';

function App() {
  return (
    <SongContextProvider>
      <div className="App">
        <div className='main rounded shadow'>
          <Homepage></Homepage>
        </div>
    </div>
    </SongContextProvider>
  );
}

export default App;
