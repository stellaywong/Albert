class Api::AlbumsController < ApplicationController
    private
    def album_params
        params.require(:album).permit(:title)
    end
end