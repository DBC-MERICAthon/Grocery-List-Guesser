class Item < ActiveRecord::Base
  has_many :itemsusers
  has_many :users, through: :itemsusers

  def self.find_or_create(params)
    target_item = Item.where(name: params[:name]).first
    target_item ? target_item : Item.create(name: params[:name], description: params[:description], category: params[:category])
  end
end
