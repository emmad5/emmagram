# == Schema Information
#
# Table name: images
#
#  id         :bigint(8)        not null, primary key
#  caption    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

end
