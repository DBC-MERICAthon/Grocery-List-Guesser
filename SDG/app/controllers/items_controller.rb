class ItemsController < ApplicationController

  def create
    @item = Item.find_or_create(params)
  end

  #may need strong params

end