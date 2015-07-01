class WelcomeController < ApplicationController
  def index
  end

  def create
    if request.xhr? 
      # binding.pry
      u = User.where(auth_id: params["auth_id"]).first
      if u.nil?
        User.create( auth_id: params["auth_id"], name: params["name"] )
      end
    end
  end
end
