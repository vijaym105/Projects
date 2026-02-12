import React from 'react'
import Wrapper from '../TaskbarComp/Wrapper'
import './spotify.scss'

const Spotify = ({windowName, setWindowState}) => {
  return (
    <Wrapper windowName={windowName} setWindowState={setWindowState}>
        <div className="spotify-app">
            <iframe data-testid="embed-iframe" style={{borderRadius: 12 + 'px' }}src="https://open.spotify.com/embed/playlist/37i9dQZF1E4oYMcZL3iviR?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Wrapper>    
)
}

export default Spotify
