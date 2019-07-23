class Annotation < ApplicationRecord
    include Voteable

    validates :annotation_body, :start_index, :end_index, :quote, :annotator_id, :track_id, presence: true

    belongs_to :annotator,
    primary_key: :id,
    foreign_key: :annotator_id,
    class_name: :User

    belongs_to :track,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Track
end