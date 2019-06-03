class RemoveUniqueIndices < ActiveRecord::Migration[5.2]
  def change
    remove_index :tracks, :title
    remove_index :tracks, :artist_id
    remove_index :tracks, :album_id
    remove_index :tracks, :uploader_id
    remove_index :albums, :artist_id
    
    add_index :tracks, :title
    add_index :tracks, :artist_id
    add_index :tracks, :album_id
    add_index :tracks, :uploader_id
    add_index :albums, :artist_id
  end
end
