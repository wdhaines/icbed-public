class Api::ProfilesController < ApplicationController

  def show

    render json: {name: 'Will Haines'}

  end

end
