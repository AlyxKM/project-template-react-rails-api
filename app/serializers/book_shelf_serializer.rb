class BookShelfSerializer < ActiveModel::Serializer
  attributes :id, :read, :user_id, :book_id

  belongs_to :book
end
