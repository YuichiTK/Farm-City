class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :place

  validates :text, presence: true
end
