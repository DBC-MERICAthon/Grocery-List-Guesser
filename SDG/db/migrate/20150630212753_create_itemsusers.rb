class CreateItemsusers < ActiveRecord::Migration
  def change
    create_table :itemsusers do |t|
      t.integer :user_id
      t.integer :item_id
      t.float :purchase_freq
      t.datetime :recent_purchase
      t.integer :total_purchases
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
