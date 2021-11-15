class BookshelfController < ApplicationController

    get '/bookshelves/:id' do
        bookshelf = User.find(params[:id]).books
        bookshelf.to_json
    end

    delete '/bookshelves/:id' do
        book = Bookshelf.find(params[:id])
        book.destroy
    end

    patch '/bookshelves/:id' do
        book = Bookshelf.find(params[:id])
        book.update(read: !book.read)
        book.to_json
    end

    post '/bookshelves' do
        newbook = Bookshelf.create(user_id: params[:user_id], book_id: params[:book_id], read: false)
        newbook.to_json
    end

end