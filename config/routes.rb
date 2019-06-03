Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root 'static_pages#root'
    
    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :tracks, only: [:index, :show, :create, :update, :destroy]
    end
    resources :artists, only: [:create, :update]
    resources :albums, only: [:create, :update]
end
