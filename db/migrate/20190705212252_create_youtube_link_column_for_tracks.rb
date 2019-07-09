class CreateYoutubeLinkColumnForTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :youtube_url, :string

  end
end
