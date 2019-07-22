json.tracks do
    json.partial! 'api/tracks/tracks', tracks: @tracks
end

# json.artists do
#     json.partial! 'api/artists/artists', artists: @artists
# end
