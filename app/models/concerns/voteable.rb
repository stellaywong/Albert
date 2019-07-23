module Voteable
    extend ActiveSupport::Concern   #look at Ruby docs

    included do
        has_many :votes,
            as: :voteable,
            class_name: :Vote
    end

    def num_votes
        self.votes.sum(:value)
    end

    def user_vote(user_id)
        vote = Vote.find_by_voteable(self, user_id)
        if vote
            return vote.value
        else
            return 0
        end
    end
end