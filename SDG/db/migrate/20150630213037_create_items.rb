class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :api_id
      t.string :category
      t.integer :shelf_life_days

      t.timestamps null: false
    end
  end
end
