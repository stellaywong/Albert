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

    has_many :comments,
    primary_key: :id,
    foreign_key: :track_id,
    class_name: :Comment

    # make a method for tracks, to be able to truncate the url
    def self.truncate_youtube_url(youtube_string)
        non_url_format = "youtu.be"

        if youtube_string.include?(non_url_format)
            begin_char = ".be"

            begin_index = youtube_string.index(begin_char) + 4
            end_index = youtube_string.length
            return youtube_string[begin_index...end_index]+"?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1"
        else
            begin_char = "v="
            end_char = "&"
            
            begin_index = youtube_string.index(begin_char) + 2
            
            if youtube_string.include?(end_char)
                end_index = youtube_string.index(end_char)
            else
                end_index = youtube_string.length
            end
            return youtube_string[begin_index...end_index]+"?modestbranding=1;controls=0;showinfo=0;rel=0;fs=1"
        end
    end

    has_one_attached :photo
end