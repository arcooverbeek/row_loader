class CreateRows < ActiveRecord::Migration
  def self.up
    create_table :rows do |t|
      t.string :name
      t.string :company
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :rows
  end
end
