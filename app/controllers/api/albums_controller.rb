class Api::AlbumsController < ApplicationController
   def create
        @album = Album.find_or_create_by(album_params)

        if !@album.save
            render json: ["albums_controller.rb create"]
            # render json: @album.errors.full_messages, status: :unprocessable_entity
        end
    end

   def update
        @album = Album.find(params[:id])

        if !@album.update(album_params)
            render json: ["albums_controller.rb create"]
            # render json: @album.errors.full_messages, status: :unprocessable_entity
        end
   end


    private
    def album_params
        params.require(:album).permit(:title)
    end
end