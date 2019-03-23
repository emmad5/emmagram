class ApplicationController < ActionController::Base
    helper_method :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        if current_user
            current_user.reset_session_token
        end
        @current_user = nil
        session[:session_token] = nil
    end

    def require_logged_in
        unless current_user
            render json: {base: ['Please log in!']}, status: 401
        end
    end

end
