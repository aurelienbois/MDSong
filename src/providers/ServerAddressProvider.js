import React, { useState } from 'react';
import ServerAddressContext from './ServerAddressContext';

function ServerAddressProvider({ children }) {
    const [serverAddress, setServerAddress] = useState('http://localhost:3001/songs/'); // permet de changer l'adresse du serveur
    // doit être utilisé dans src/App.js pour passer l'adresse du serveur à tous les composants enfants
    // ex : <ServerAddressProvider>
    //         <App />
    //      </ServerAddressProvider>

    return (
        <ServerAddressContext.Provider value={{ serverAddress, setServerAddress }}>
            {children}
        </ServerAddressContext.Provider>
    );
}

export default ServerAddressProvider;