class WelcomeController < ApplicationController
  def index
  end

  def create
    if request.xhr?
      # binding.pry
      @u = User.where(auth_id: params["auth_id"]).first
      p @u
      # binding.pry
      # @list = @u.itemsers
      if @u.nil?
        @u = User.create( auth_id: params["auth_id"], name: params["name"] )
      else
      #   #get items data and render list homepage
        @list = @u.get_list
        p 'rendering'
        render partial: "welcome/index", locals: { user: @u, list: @list}
      end
    end
  end
end
