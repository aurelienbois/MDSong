// Import des dépendances nécessaires depuis React et le contexte des chansons
import React, { useEffect, useState } from 'react';
import SongsContext from './SongsContext'; // Contexte global pour les données des chansons
import sons from '../sons'; // Import des données des chansons

// Définition du composant SongContextProvider
function SongContextProvider({ children }) {
    // États pour gérer les chansons, la chanson actuelle, et l'état de lecture
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState({});
    const [play, setPlay] = useState(true);

    // Utilisation de useEffect pour charger les chansons initiales
    useEffect(() => {
        setSongs(sons);
    }, [songs]);

    // Fonction pour changer la chanson actuelle
    const changeCurrentSong = (song) => {
        setCurrentSong(song);
    }

    // Fonction pour mettre en pause ou jouer la musique
    const pauseOrPlay = () => {
        const audio = document.querySelector('audio');

        if (play) {
            audio.pause();
            setPlay(false);
        } else {
            audio.play();
            setPlay(true);
        }
    }

    // Fonction pour passer à la chanson suivante
    const goForward = () => {
        const indexOfCurrentSong = songs.indexOf(currentSong);

        let nextSong = null;
        if (indexOfCurrentSong + 1 === songs.length) {
            nextSong = songs[0];
        } else {
            nextSong = songs[indexOfCurrentSong + 1];
        }

        setCurrentSong(nextSong);
        setPlay(true);
    }

    // Fonction pour revenir à la chanson précédente
    const goBackward = () => {
        const indexOfCurrentSong = songs.indexOf(currentSong);

        let previousSong = null;
        if (indexOfCurrentSong === 0) {
            previousSong = songs[songs.length - 1];
        } else {
            previousSong = songs[indexOfCurrentSong - 1];
        }

        setCurrentSong(previousSong);
        setPlay(true);
    }

    // Rendu du composant, fournissant le contexte global aux composants enfants
    return (
        <SongsContext.Provider value={{ songs, currentSong, changeCurrentSong, play, setPlay, pauseOrPlay, goForward, goBackward }}>
            {children}
        </SongsContext.Provider>
    );
}

// Export du composant SongContextProvider
export default SongContextProvider;
