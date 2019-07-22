json.tracks do
    json.partial! 'api/tracks/tracks', tracks: @tracks
end

# we're not searching by artist for now because it's a massive n+1 query
# json.artists do
#     @artists.each do |artist|
#     json.set! artist.id do
#         json.extract! artist, :id, :name

#         artist.tracks do |track|
#             json.partial! 'api/tracks/track', tracks: track
#         end
#     end
# end
# end
