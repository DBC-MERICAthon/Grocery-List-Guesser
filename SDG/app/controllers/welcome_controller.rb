class WelcomeController < ApplicationController
  def index
  end

  def login
    if request.xhr? 
      # binding.pry
      u = User.where(auth_id: params["auth_id"]).first
      if u.nil?
        User.create( auth_id: params["auth_id"], name: params["name"] )
      else
        #get items data and render list homepage
      end
    end
  end
end
