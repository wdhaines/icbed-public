IcbedRails::Application.routes.draw do

  scope format: true, constraints: { format: 'json' } do

    namespace :api do
      resources :profiles, only: [:show]
    end

  end

end
