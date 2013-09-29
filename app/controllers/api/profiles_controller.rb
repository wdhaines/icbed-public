class Api::ProfilesController < ApplicationController

  def show

    render json: {
        name: 'Will Haines',
        website: 'www.icbed.com',
        website_url: 'http://www.icbed.com',
        linkedin_url: 'http://www.linkedin.com/in/wdhaines',
        github_url: 'http://www.github.com/wdhaines'
    }

  end

end
