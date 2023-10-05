import {Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import ArtistInfo from '../components/ArtistPage/ArtistInfo'
import ArtistAlbum from '../components/ArtistPage/ArtistAlbum'
import ArtistSongsTop from '../components/ArtistPage/ArtistSongsTop'

const ArtistPage = () => {
  
  const { id } = useParams()
  
    const [ artist, getArtist ] = useFetch()

    useEffect(() => {
       getArtist(`/api/artists/${id}`) 
    }, [id])

    return (
    <div>
        <link to="/" >Atras</link>
        <ArtistInfo
        artist={artist}
        />
        <ArtistAlbum
        albums={artist?.albums}
        />
        <ArtistSongsTop
        tracks={artist?.songsTop}
        />
    </div>
  )
}

export default ArtistPage