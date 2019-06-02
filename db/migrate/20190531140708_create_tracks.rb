class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :artist_id, null: false
      t.integer :album_id, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :tracks, :title, unique: true
    add_index :tracks, :artist_id, unique: true
    add_index :tracks, :album_id, unique: true
    add_index :tracks, :uploader_id, unique: true
  end
end
