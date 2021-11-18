class User < ApplicationRecord
    has_many :bookShelves
    has_many :books, through: :bookShelves
    has_secure_password
    validates :user_name, :password, presence: true
    validates :user_name, uniqueness: true
end
