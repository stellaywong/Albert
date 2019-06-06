#    debugger
#    p add_track_debugger
json.track do
    json.partial! 'api/tracks/track', track: @track
end
# nest in a do end block because now promiseObj looks like: {track: {…}, annotations: {…}}
    # json.album_title @album, :title
    # json.artist_name @artist, :name
    # debugger waterfall for trackShow -- just this line will suffice

json.annotations do         # under a key of annotations
    if @annotations.empty?   # created in annotations_controller's index
        []
    else    
        @annotations.each do |annotation|
            json.set! annotation.id do
                json.extract! annotation, :id, :body, :track_id, :annotator_id, :start_index, :end_index
            end
        end
    end
end
    # not nested -- giving it a key of annotations