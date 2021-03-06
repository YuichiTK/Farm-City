class PictureUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   # ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  version :thumb do
    process resize_to_fill: [180, 180]
  end

  version :medium do
    process resize_to_fill: [280, 280]
  end

  version :large do
    process resize_to_fill: [320, 320]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end
