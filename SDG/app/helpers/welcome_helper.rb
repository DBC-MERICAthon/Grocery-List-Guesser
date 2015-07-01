module WelcomeHelper

  def get_list(uid)
    all_relations = Itemsusers.where({user_id: uid})
    time = Time.now
    predictions = all_relations.select do |relation|
      relation.purchase_freq < (time - relation.recent_purchase)
    end
  end

end
