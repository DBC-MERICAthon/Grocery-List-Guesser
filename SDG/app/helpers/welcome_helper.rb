module WelcomeHelper

  def get_list(uid)
    all_relations = Itemsusers.where({user_id: uid})
    predictions = all_relations.select do |relation|
      relation.purchase_freq < (Time.now - relation.recent_purchase)
    end
  end

end
