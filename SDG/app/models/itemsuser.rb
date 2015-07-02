class Itemsuser < ActiveRecord::Base
  belongs_to :user
  belongs_to :item

  def self.find_or_create(params)
    target_relation = self.where(user_id: params[:user], item_id: params[:id]).first
    target_relation ||= self.create(item_id: params[:id], user_id: params[:user])
  end
end
