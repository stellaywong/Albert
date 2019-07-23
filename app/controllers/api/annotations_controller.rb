class Api::AnnotationsController < ApplicationController
    def index
        # @annotations = Annotation.includes(:annotator).all
        @annotations = Track.find(params[:trackId]).annotations.includes(:annotator)

    end

    def show
        @annotation = Annotation.find(params[:id])
        render :show
    end

    def upvote
        vote(1)
    end

    def downvote
        vote(-1)
    end

    def create
        @annotation = Annotation.new(annotation_params)
        @annotation.annotator_id = current_user.id
        # debugger  
        if @annotation.save
            render :show
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    def update
        @annotation = Annotation.find(params[:id])

        if @annotation.update(annotation_params)
            render :show
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    def destroy
        @annotation = Annotation.find(params[:id])

        if @annotation.destroy
            render json: @annotation.id
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    private
    def annotation_params
        params.require(:annotation).permit(:annotation_body, :start_index, :end_index, :quote, :annotator_id, :track_id)
    end

    def vote(direction)
        @annotation = Annotation.find(params[:id])
        @vote = @annotation.votes.find_or_initialize_by(user: current_user)    # active record relation "find_or_initialize_by"

        if @vote    # if there exists a vote
            if @vote.value == direction    # if the point value is the same, destroy the vote and keep the json at 0
                @vote.destroy
                render json: 0
            else
                @vote.update(value: direction)    # if the point value has changed, update the vote and add/subtract the json
                render json: @vote.value
            end
        else      # if there doesn't exist a vote
            @annotation.votes.create!(user_id: current_user.id, value: direction)  # make a vote with the current user's id
            render json: direction
        end
  end


end