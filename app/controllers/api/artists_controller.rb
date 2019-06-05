class Api::ArtistsController < ApplicationController
    def index
        @artists = Artist.all
    end
    
    def show
        @artist = Artist.find(params[:id])
        render :show
    end
    
    def create
        @artist = Artist.find_or_create_by(artist_params)

        if !@artist.save
            # render json: ["artists_controller.rb create"]
            render json: @artist.errors.full_messages, status: :unprocessable_entity
        end
    end

   def update
        @artist = Artist.find(params[:id])

        if !@artist.update(artist_params)
            # render json: ["artists_controller.rb update"]
            render json: @artist.errors.full_messages, status: :unprocessable_entity
        end
   end

    private
    def artist_params
        params.require(:artist).permit(:name)
  end
end