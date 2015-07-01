# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

test_items = Item.create([{name: 'test 1 item name', api_id: 'test 1 api id', category: 'test 1 category'}, {name: 'test 2 item name', api_id: 'test 2 api id', category: 'test 2 category'}])