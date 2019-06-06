class Track < ApplicationRecord
    validates :title, :lyrics, :artist_id, :album_id, :uploader_id, presence: true

    belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

    belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Artist

    belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album

    has_many :annotations,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Annotation

    has_one_attached :photo
end