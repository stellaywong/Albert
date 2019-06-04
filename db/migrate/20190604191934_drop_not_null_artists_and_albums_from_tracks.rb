class DropNotNullArtistsAndAlbumsFromTracks < ActiveRecord::Migration[5.2]
  def change
    change_column :tracks, :artist_id, :integer, null: true
    change_column :tracks, :album_id, :integer, null: true
  end
end
