class Itemsuser < ActiveRecord::Base
  belongs_to :user
  belongs_to :item

  def self.find_or_create(args)
    target_relation = self.where(user_id: args[:user_id], item_id: args[:id]).first
    target_relation ||= self.create(item_id: args[:id], user_id: args[:user_id])
  end
end
