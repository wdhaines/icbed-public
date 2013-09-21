class Api::ProfilesController < ApplicationController

  def show

    render json: {
        name: 'Will Haines',
        website: 'www.icbed.com'
    }

  end

end
