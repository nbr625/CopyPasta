class CreateClips < ActiveRecord::Migration
  def change
    create_table :clips do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
