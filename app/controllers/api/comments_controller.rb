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

    def upvote
        vote(1)
    end

    def downvote
        vote(-1)
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

    def vote(direction)
        @comment = Comment.find(params[:id])
        @vote = @comment.votes.find_or_initialize_by(user: current_user)    # active record relation "find_or_initialize_by"

        if @vote    # if there exists a vote
            if @vote.value == direction    # if the point value is the same, destroy the vote and keep the json at 0
                @vote.destroy
                render json: 0
            else
                @vote.update(value: direction)    # if the point value has changed, update the vote and add/subtract the json
                render json: @vote.value
            end
        else      # if there doesn't exist a vote
            @comment.votes.create!(user_id: current_user.id, value: direction)  # make a vote with the current user's id
            render json: direction
        end
  end

end