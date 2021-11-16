class User < ApplicationRecord
    has_many :bookshelves
    has_many :books, through: :bookshelves
    validates :name, presence: true
end
