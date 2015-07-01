# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# test_items = Item.create([{name: 'test 1 item name', api_id: 'test 1 api id', category: 'test 1 category'}, {name: 'test 2 item name', api_id: 'test 2 api id', category: 'test 2 category'}])

produce_items = Item.create([{name: 'apple', category: 'produce'}, {name: 'orange', category: 'produce'}, {name: 'carrot', category: 'produce'}, {name: 'potato', category: 'produce'}, {name: 'broccoli', category: 'produce'}])

protein_items = Item.create([{name: 'chicken', category: 'meat/fish/poultry'}, {name: 'salmon', category: 'meat/fish/poultry'}, {name: 'ground beef', category: 'meat/fish/poultry'}, {name: 'lamb chops', category: 'meat/fish/poultry'}, {name: 'bacon', category: 'meat/fish/poultry'}])

dairy_items = Item.create([{name: 'milk', category: 'dairy', shelf_life_days: 7}, {name: 'yogurt', category: 'dairy', shelf_life_days: 7}, {name: 'cheese', category: 'dairy', shelf_life_days: 7}, {name: 'butter', category: 'dairy', shelf_life_days: 7}])

bakery_items = Item.create([{name: 'bread', category: 'bakery'}, {name: 'bagels', category: 'bakery'}, {name: 'muffins', category: 'bakery'}, {name: 'pita bread', category: 'bakery'}])

boxed_and_canned_items = Item.create([{name: 'cereal', category: 'boxed and canned goods'}, {name: 'pasta', category: 'boxed and canned goods'}, {name: 'beans', category: 'boxed and canned goods'}, {name: 'rice', category: 'boxed and canned goods'}])

beverage_items = Item.create([{name: 'coffee', category: 'beverage'}, {name: 'tea', category: 'beverage'}, {name: 'orange juice', category: 'beverage'}])

frozen_items = Item.create([{name: 'ice cream', category: 'frozen'}, {name: 'peas', category: 'frozen'}, {name: 'frozen yogurt', category: 'frozen'}, {name: 'frozen pizza', category: 'frozen'}])

spices_and_herbs = Item.create([{name: 'salt', category: 'spices and herbs'}, {name: 'cinnamon', category: 'spices and herbs'}, {name: 'bay leaves', category: 'spices and herbs'}])

non_food_items = Item.create([{name: 'dish soap', category: 'non-food items'}, {name: 'garbage bags', category: 'non-food items'}, {name: 'tin foil', category: 'non-food items'}, {name: 'toilet paper', category: 'non-food items'}, {name: 'laundry soap', category: 'non-food items'}])