class Api::SearchController < ApplicationController
    def index
        input = params[:search]

        # debugger

        render json: input
    end

    # private
    # def search_params
    #     params.require(:search).permit(:input)
    # end

end