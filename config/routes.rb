Rails.application.routes.draw do
  resources :users, only: [:create, :index, :show]
  resources :books, only: [:index, :show]
  resources :bookshelves, only: [:index, :show, :destroy, :create]
end
 