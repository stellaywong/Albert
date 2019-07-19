#    debugger
#    p add_track_debugger
# json.track do
#     json.partial! 'api/tracks/track', track: @track
# end
# nest in a do end block because now promiseObj looks like: {track: {…}, annotations: {…}}
    # json.album_title @album, :title
    # json.artist_name @artist, :name
    # debugger waterfall for trackShow -- just this line will suffice

# json.annotations do         # under a key of annotations
#     if @annotations.empty?   # created in annotations_controller's index
#         []
#     else    
#         @annotations.each do |annotation|
#             json.set! annotation.id do
#                 json.extract! annotation, :id, :body, :track_id, :annotator_id, :start_index, :end_index
#             end
#         end
#     end
# end
    # not nested -- giving it a key of annotations

# in show, we're suppose to put, as a payload, all of the following:
# track, users, annotations, comments, artists, albums

# the single ones #################################################
json.track do
    json.partial! 'api/tracks/track', track: @track
end
json.artist do
    json.partial! 'api/artists/artist', artist: @artist
end
json.album do
    json.partial! 'api/albums/album', album: @album
end

# the plural ones ##################################################
json.users do 
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end
json.annotations do 
    @annotations.each do |annotation|
        json.set! annotation.id do
            json.partial! 'api/annotations/annotation', annotation: annotation
        end
    end
end
json.comments do 
    @comments.each do |comment|
        json.set! comment.id do
            json.partial! 'api/comments/comment', comment: comment
        end
    end
end