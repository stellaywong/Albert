@tracks.each do |track|
    json.set! track.id do
        # debugger
        # for aws --> add/edit track debug
        json.partial! 'api/tracks/track', track: track

        json.artist_name track.artist.name
        # thus in the frontend we call just "artist_name"
        json.album_title track.album.title
    end
end
