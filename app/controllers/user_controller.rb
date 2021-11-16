class UserController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        if user
        render json: user
        else
        render json: {error: "User not found"}, status: :not_found
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:name)
    end


end