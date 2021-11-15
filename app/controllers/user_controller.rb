class UserController < ApplicationController

    get '/users' do
        users = User.all 
        users.to_json
    end 

    get '/users/:id' do
        users = User.find(params[:id])
        users.to_json
    end


end