class BookController < ApplicationController

    def index
        books = Book.all
        render json: books
    end

    def show
        book = Book.find_by(id: params[:id])
        if book
        render json: book
        else
        render json: {error: "Book not found"}, status: :not_found
        end
    end



end