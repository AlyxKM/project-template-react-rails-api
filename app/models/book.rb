class Book < ApplicationRecord
    has_many :bookShelves, dependent: :destroy
    has_many :users, through: :bookshelves
end
