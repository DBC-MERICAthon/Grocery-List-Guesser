class ItemsController < ApplicationController

  def create
    @item = Item.find_or_create(strong_params)
  end

  #Need to check strong params name here and assign after ajaxed in

  private

  def strong_params
    params.require(:some_name_of_json).permit(:name, :description, :category)
  end

end