class BookController < ApplicationController

    get '/books' do
        books = Book.all 
        books.to_json
    end 

    get '/books/:id' do
        books = Book.find(params[:id])
        books.to_json
    end

    post '/books' do
        book = Book.create(title: params[:title], genre: params[:genre], author_name: params[:author_name])
        book.to_json
    end


end