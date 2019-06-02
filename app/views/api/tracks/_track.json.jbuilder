json.extract! track, :id, :title, :lyrics, :artist_id, :album_id, :uploader_id
# no @ symbol on track, because the index.js had @tracks.each do |track|, so we now refer to them as track.
# you need an id for the track itself in the database -- it doesn't autoincrement