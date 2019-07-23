class Vote < ApplicationRecord

    validates :voter_id, uniqueness: { scope: [:voteable_id, :voteable_type] }
    # scope: that :voteable_id, :voteable_type rely on the voter_id to exist
    # this is the model portion, while the migrations (db) setup was for the database portion

    belongs_to :voteable, polymorphic: true
    
    belongs_to :user, inverse_of: :votes

end