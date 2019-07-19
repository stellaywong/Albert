class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all.with_attached_photo
        @artists = Artist.all   
        render :index
    end
    
    def show
        # debugger
        # p add_track_debugger
        @track = Track.find(params[:id])    #.where will give you an array; .find will give you the first one it finds
        @artist = @track.artist             #this instead of Track.all: it's less data so you spend less time in your backend   
        @album = @track.album
        @annotations = @track.annotations   #wonderful annotations object
        @comments = @track.comments
        @users = @track.annotators + @track.commenters
        # a track belongs to an artist
        render :show
    end

    def create
        @track = Track.new(track_params)
        # debugger
  
        artist = Artist.find_by(name: params[:track][:artist_name])
        if artist.nil?
            artist = Artist.new(name: params[:track][:artist_name])
            artist.save!
        end

        album = Album.find_by(title: params[:track][:album_title])
        if album.nil?
            album = Album.new(title: params[:track][:album_title], artist_id: artist.id)
            album.save!
        end

        params[:track].delete(:album_title)
        params[:track].delete(:artist_name)


        @track.artist_id = artist.id
        @track.album_id = album.id
        
        # debugger
        @track.uploader_id = current_user.id   # no @sign
        # @artist = Artist.find_or_create_by(@track.artist_name)
        # @album = Album.find_or_create_by(@track.album_title)

        # @album = @track.album.create!(album_title)
        # @artist = @album.artist.create!(artist_name)

        # truncated_youtube_url = Track.truncate_youtube_url(@track.youtube_url)
        # overwrite the saved variable: save the short version instead of the long version
        @track.youtube_url = Track.truncate_youtube_url(@track.youtube_url)
        # debugger

        if @track.save
            # debugger
            # p add_track_debugger
            render :show
        else
            # debugger
            # p add_track_debugger
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @track = Track.find(params[:id])
        
        if @track.update(track_params)
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        @track = Track.find(params[:id])

        if @track.destroy
            render :index
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    private
    def track_params
        params.require(:track).permit(:id, :title, :lyrics, :artist_id, :album_id, :uploader_id, :photo, :youtube_url)
    end
end