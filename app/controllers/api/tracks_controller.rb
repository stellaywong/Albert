class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all.with_attached_photo
        @artists = Artist.all   
        render :index
    end

    def show
        # debugger
        # p add_track_debugger
        @track = Track.find(params[:id])
        @artist = @track.artist
        # a track belongs to an artist
        render :show
    end

    def create
        # debugger
        # commented out
  
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

        @track = Track.new(track_params)

        @track.artist_id = artist.id
        @track.album_id = album.id
        
        # debugger
        # @track.uploader_id = current_user.id   # no @sign
        # @artist = Artist.find_or_create_by(@track.artist_name)
        # @album = Album.find_or_create_by(@track.album_title)

        # @album = @track.album.create!(album_title)
        # @artist = @album.artist.create!(artist_name)



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
        params.require(:track).permit(:title, :lyrics, :artist_id, :album_id, :uploader_id)
    end
end