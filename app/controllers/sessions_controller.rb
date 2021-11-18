class SessionsController < ApplicationController

    def create
        user = User.find_by(user_name: params[:user_name])
        if user
    end

    def destroy

    end
end
