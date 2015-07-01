class Itemsuser < ActiveRecord::Base
  belongs_to :user
  belongs_to :item

  def self.find_or_create(params)
    target_relation = self.where(user_id: params[:user_id], item_id: params[:item_id]).first
    target_relation ||= self.create(item_id: params[:item_id], user_id: params[:user_id])
  end
end
