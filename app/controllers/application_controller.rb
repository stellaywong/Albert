class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    #CELLL

    helper_method :current_user, :logged_in?

    private
    def current_user
        if session[:session_token]
            user = User.find_by(session_token: session[:session_token])     #?
        else
            return nil
        end
    end

    def ensure_logged_in
        unless logged_in?        #?
            # render json: {['Invalid credentials']}, status: 401     #?
            redirect_to api_session
        end
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end
    
    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
