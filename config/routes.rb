Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root 'static_pages#root'
    
    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy]
      resources :tracks, only: [:index, :show, :create, :update, :destroy]
      resources :artists, only: [:index, :show, :create, :update, :destroy]
      resources :albums, only: [:index, :show, :create, :update, :destroy]
      resources :annotations, only: [:index, :show, :create, :update, :destroy] do
        member do
          post 'upvote'
          post 'downvote'
        end
      end
      resources :comments, only: [:index, :show, :create, :destroy] do
        member do
          post 'upvote'
          post 'downvote'
        end
      end
      resources :search, only: [:index]
    end
end
