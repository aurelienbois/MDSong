// Import des dépendances nécessaires depuis React et le contexte des chansons
import React, { useContext, useEffect } from 'react';
import OneSong from './OneSong'; // Composant représentant une chanson individuelle
import SongsContext from '../providers/SongsContext'; // Contexte global pour les données des chansons
import SongPlayer from './SongPlayer'; // Composant du lecteur audio

// Définition du composant Homepage
function Homepage() {
    // Utilisation du contexte pour accéder aux données des chansons
    const { songs, currentSong } = useContext(SongsContext);

    // Utilisation de useEffect pour afficher les chansons dans la console lorsqu'elles changent
    useEffect(() => {
        if (songs) {
            console.log(songs);
        }
    }, [songs]);

    // Rendu du composant
    return (
        <div className='home position-relative'>
            {/* Section supérieure de la page d'accueil */}
            <section className='top-section p-3'>
                <h1 className='m-0'>La classe B2</h1>
                <p className='m-0 '>Ajout récent &nbsp;&nbsp;¤&nbsp;&nbsp; 12 sons &nbsp;&nbsp;¤&nbsp;&nbsp; 34 mins </p>
            </section>

            {/* Section inférieure de la page d'accueil */}
            <section className='bottom-section p-3 pt-4'>
                {/* Bouton pour mélanger les chansons de manière aléatoire */}
                <button className='shuffle rounded shadow p-2'><i class="fa-solid fa-shuffle"></i>&nbsp;&nbsp; Aléatoire</button>
                
                {/* Liste de chansons, utilisant le composant OneSong pour chaque chanson */}
                <div className='liste-music pt-3 pb-5'>
                    {songs?.map((song) => (
                        <OneSong song={song}></OneSong>
                    ))}
                </div>
            </section>

            {/* Lecteur audio caché avec la source de la chanson actuelle */}
            <audio className='d-none' src={"http://localhost:3001/songs/" + currentSong?.song} controls autoPlay />

            {/* Affichage du lecteur audio seulement si une chanson est sélectionnée */}
            {Object.keys(currentSong).length !== 0 && <SongPlayer></SongPlayer>}
        </div>
    );
}

// Export du composant Homepage
export default Homepage;
