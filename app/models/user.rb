class User < ApplicationRecord
    has_many :bookshelves
    has_many :books, through: :bookshelves
    validates :user_name, :password, presence: true
    validates :user_name, uniqueness: true
end
