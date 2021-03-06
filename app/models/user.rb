class User < ActiveRecord::Base
  has_and_belongs_to_many :places
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def signature
    name.blank? ? email : name
  end
end
