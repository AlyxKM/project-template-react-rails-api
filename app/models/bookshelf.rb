class Bookshelf < ActiveRecord::Base
    belongs_to :user
    belongs_to :book
    
        def read_status
            #toggle if book has been read
            self.update(read: !self.read)
        end
    
        def self.most_books
            arr = self.pluck(:user_id)
            user_count = Hash.new(0)
            arr.each {|user| user_count[user] += 1}
            id = user_count.sort_by { |user,number| number}.last[0]
            books1 = user_count.sort_by { |user,number| number}.last[1]
            user1 = User.find(id)
            "#{user1.user_name} has the biggest bookshelf with #{books1} books!"
        end
    
        def self.most_recommended
            arr = self.pluck(:book_id)
            user_count = Hash.new(0)
            arr.each {|user| user_count[user] += 1}
            id = user_count.sort_by { |user,number| number}.last[0]
            amount = user_count.sort_by { |user,number| number}.last[1]
            book1 = Book.find(id)
            "#{book1.title} is the most recommended book! Its been added to #{amount} bookshelves!"
        end
    
    end