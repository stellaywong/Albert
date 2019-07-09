class Api::AnnotationsController < ApplicationController
    def index
        # @annotations = Annotation.includes(:annotator).all
        @annotations = Track.find(params[:trackId]).annotations.includes(:annotator)

    end

    def show
        @annotation = Annotation.find(params[:id])
        render :show
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
            # render :index
        else
            render json: @annotation.errors.full_messages, status: 422
        end
    end

    private
    def annotation_params
        params.require(:annotation).permit(:annotation_body, :start_index, :end_index, :quote, :annotator_id, :track_id)
    end

end