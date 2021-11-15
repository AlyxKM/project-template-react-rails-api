class Book < ActiveRecord::Base
    has_many :bookshelves
    has_many :users, through: :bookshelves

    def recommended_yet(name)
        self.users.any? {|user| user.user_name == name}
    end

end