class Artist < ApplicationRecord
    validates :name, presence: true

    has_many :tracks,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Track

    has_many :albums,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Album

    # through associations?
end