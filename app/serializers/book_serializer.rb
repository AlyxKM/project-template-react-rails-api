class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :author_name, :image
end
