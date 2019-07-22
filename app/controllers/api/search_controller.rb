class Api::SearchController < ApplicationController
    def index
        input = params[:search]

        # debugger
        # custom SQL query:
        # "where" command does a custom search
        # "includes" keyword to prevent n+1 queries
        # "with_attached_" keyword for active storage (AWS images)
        @tracks = Track.where("lower(title) LIKE (?)", "%#{input}%".downcase).with_attached_photo
        # lower() and .downcase are for the search bar to return still things that are both lowercase and uppercase
        @artists = Artist.includes(:tracks).where("name LIKE (?)", "%#{input}%")
        
        if @tracks
            render :index
        else
            render json: @tracks.errors.full_messages
        end
    end

    # private
    # def search_params
    #     params.require(:search).permit(:input)
    # end

end