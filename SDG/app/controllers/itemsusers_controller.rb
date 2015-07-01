class ItemsusersController < ApplicationController


  def create
   @itemsuser_relation = Itemsuser.find_or_create(params)
  end

  def update
  end

  def destroy
  end

  # def show
  # end

  # def strong_params
  #   params.require(:some_name_of_json).permit(:user_id, :item_id)
  # end

end
