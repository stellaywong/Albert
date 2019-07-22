@artists.each do |artist|
    json.set! artist.id do
        # debugger
        # for aws --> add/edit artist debug
        json.partial! 'api/artists/artist', artist: artist
    end
end
