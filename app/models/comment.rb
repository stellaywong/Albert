class Comment < ApplicationRecord
    validates :comment_body, presence: true

    after_initialize :ensure_track_id!

    belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

    belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track

    has_many :child_comments,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment

    belongs_to :parent_comment,
    primary_key: :id,
    foreign_key: :parent_comment_id,
    class_name: :Comment,
    optional: :true

    private
    def ensure_track_id!
        self.track_id ||= self.parent_comment.track_id if parent_comment
    end
end