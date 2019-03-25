json.extract! @image, :id, :caption, :user_id
json.image_url url_for(@image.photo)
json.username @image.user.username