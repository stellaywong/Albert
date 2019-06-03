class Api::ArtistsController < ApplicationController
   def create
        @artist = Artist.find_or_create_by(artist_params)

        if !@artist.save
            render json: @artist.errors.full_messages, status: :unprocessable_entity
        end
    end

   def update
        @artist = Artist.find(params[:id])

        if !@artist.update(artist_params)
            render json: @artist.errors.full_messages, status: :unprocessable_entity
        end
   end

    private
    def artist_params
        params.require(:artist).permit(:name)
  end
end