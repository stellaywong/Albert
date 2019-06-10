class Api::UsersController < ApplicationController
    def create
        errors = []

        if params[:user][:username] == ""
            errors << 'username'
        end

        if params[:user][:password] == ""
            errors << 'password'
        end

        if params[:user][:email] == ""
            errors << 'email'
        end

        

        if errors.length > 0
            render json: errors, status: 422
            return
        else
            @user = User.new(user_params)

            if @user.save
                login(@user)
                render "api/users/show"
            else
                render json: ['Email has already been taken'], status: 422
            end
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end