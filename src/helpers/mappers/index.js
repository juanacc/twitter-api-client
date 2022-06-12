exports.twitterMapper = twitt => ({
    created_at: twitt.created_at,
    text: twitt.text,
    name: twitt.user.name,
    screen_name: twitt.user.screen_name,
    location: twitt.user.location,
    profile_img: twitt.user.profile_image_url_https,
});