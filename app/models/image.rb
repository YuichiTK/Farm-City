class Image < ActiveRecord::Base
  belongs_to :place
  mount_uploader :picture, PictureUploader
  default_scope { order('created_at DESC') }

  validates :picture, :name, presence: true
end
