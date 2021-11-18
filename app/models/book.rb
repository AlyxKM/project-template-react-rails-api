class Book < ApplicationRecord
    has_many :bookShelves
    has_many :users, through: :bookshelves
end
