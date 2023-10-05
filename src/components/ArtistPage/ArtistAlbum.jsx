import albumCard from "./AlbumCard"

const ArtistAlbum = ({albums}) => {
  return (
    <section>
        <h3>Artist´s Album</h3>
     <div>
    {
        albums?.map(albumInfo => (
            <albumCard
                key={albumInfo.id}
                album={albumInfo}
            />
        ))
    }
     </div>
    </section>
  )
}

export default ArtistAlbum