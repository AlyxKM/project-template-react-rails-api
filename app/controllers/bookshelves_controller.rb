class BookshelvesController < ApplicationController

    def index
        # bookshelves = BookShelf.all
          my_bookshelf = User.first.bookshelves
        render json: my_bookshelf
    end

    def show
        bookShelf = BookShelf.find_by(id: params[:id])
        if bookShelf
        render json: bookShelf
        else
        render json: {error: "BookShelf not found"}, status: :not_found
        end
    end

    def create
        bookShelf = BookShelf.create(bookShelf_params)
        if bookShelf.valid?
            render json: bookShelf
        else
            render json: bookShelf.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        book = BookShelf.find_by(id: params[:id])
        if book
        book.destroy
        else
        render json: {error: "Book not found"}, status: :not_found
        end
    end

    def userBookshlf
       
        userBookShlf = current_user.books
        byebug
        if userBookShlf
            render json: userBookshlf
        else
            render json: {error: "Bookshelf not found"}, status: :not_found
        end
    end

    private

    def bookShelf_params
        params.permit(:user_id, :book_id, :read)
    end
   

end