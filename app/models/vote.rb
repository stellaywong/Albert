class Vote < ApplicationRecord

    validates :value, presence: true
    validates :voter_id, uniqueness: { scope: [:voteable_id, :voteable_type] }
    # scope: that :voteable_id, :voteable_type rely on the voter_id to exist
    # this is the model portion, while the migrations (db) setup was for the database portion

    belongs_to :voteable, polymorphic: true
    
    belongs_to :voter, 
    primary_key: :id,
    foreign_key: :voter_id,
    class_name: :User,
    inverse_of: :votes

    def self.find_by_voteable(voteable, user_id)
        Vote.find_by(
            voteable_id: voteable.id,
            voteable_type: voteable.class.to_s,
            voter_id: user_id
        )
    end
end