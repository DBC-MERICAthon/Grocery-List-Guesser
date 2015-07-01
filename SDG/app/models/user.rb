class User < ActiveRecord::Base
  has_many :itemsusers
  has_many :items, through: :itemsusers


  # private

  def get_list
    all_relations = self.itemsusers
    time = Time.now
    predictions = all_relations.select do |relation|
      relation.purchase_freq < (time - relation.recent_purchase)
    end
    list = predictions.map do |relation|
      Item.where(id: relation.item_id)
    end
    return list
  end

end
