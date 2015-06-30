class Item < ActiveRecord::Base
  has_many :itemsusers
  has_many :users, through: :itemsusers
end
