class User < ActiveRecord::Base
  has_many :itemsusers
  has_many :items, through: :itemsusers
end
