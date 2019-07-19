class Api::CommentsController < ApplicationController   
    # must say Api first bc we're not using regular JSON anymore

    def index
        @comments = Track.find(params[:trackId]).comments.includes(:commenter)
        # debugger
        render :index
    end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = current_user.comments.new(comment_params)    #built in Rails method to create a new entry
        # use this or use Comment.new(comment_params)   ?

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end

    end

    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])

        if @comment.destroy
            render json: @comment.id
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    private
    def comment_params
        params.require(:comment).permit(:comment_body, :parent_comment_id, :track_id, :commenter_id)
        # permit it as long as it's coming from the frontend
    end

end