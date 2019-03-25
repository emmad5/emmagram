json.partial! "api/users/user", user: @user

json.images do
  @user.images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :caption, :user_id
      json.image_url url_for(image.photo)
    end
  end
end
