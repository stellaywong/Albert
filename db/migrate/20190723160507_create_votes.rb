class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :voter_id, null: false
      t.integer :value, null: false
      t.integer :voteable_id, null: false
      t.string :voteable_type, null: false

      t.timestamps
    end
    add_index :votes, :voter_id
    add_index :votes, [:voteable_type, :voteable_id]
    add_index :votes, [:voter_id, :voteable_type, :voteable_id], unique: true
  end
end
