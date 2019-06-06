json.extract! track, :id, :title, :lyrics, :artist_id, :album_id, :uploader_id, :annotation_ids
# no @ symbol on track, because the index.js had @tracks.each do |track|, so we now refer to them as track.
# you need an id for the track itself in the database -- it doesn't autoincrement
# bc there's now a method called annotations, theres' a bonus rails method called annotation_ids (PLURAL)
# you can use that method instead of create an array called annotationIds, iterate through the track's annotations, push each annoation id onto the array, and then return the array

# debugger
# p add_track_debugger
if track.photo.attached?
    json.photoUrl url_for(track.photo)
    # for aws --> add/edit track debug
end
#AWS #in a conditional so as not to force image attached to new track