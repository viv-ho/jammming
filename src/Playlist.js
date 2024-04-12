import './Playlist.css'
import React, {useState} from 'react'

function Playlist() {
    const [playlist, setPlaylist] = useState('Playlist Name')
    return (
        <div className='Playlist'>
            <input 
                className='input' 
                value={playlist}
            />
            <button className='save-button'>Save to Spotify</button>
        </div>
    )
}

export default Playlist