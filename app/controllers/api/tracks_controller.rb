class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all        
        render :index
    end

    def show
        @track = Track.find(params[:id])
        render :show
    end

    def create
        # debugger
        # commented out
        @track = Track.new(track_params)
        @track.uploader_id = current_user.id   # no @sign

        if @track.save
            render :show
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
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

    def track_params
        params.require(:track).permit(:title, :lyrics, :artist_id, :album_id, :uploader_id)
    end
end