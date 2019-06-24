class CorrectlyAddAnnotationBodyAddQuote < ActiveRecord::Migration[5.2]
  def change
    remove_column :annotations, :body
    add_column :annotations, :annotation_body, :string, null: false

    add_column :annotations, :quote, :string, null: false
  end
end
