exports.getPublicUserProfile = function (privateUserProfile){
  let publicProfile = {
    uid:privateUserProfile.uid,
    displayName:privateUserProfile.displayName,
    photoURL:privateUserProfile.photoURL,
    email:privateUserProfile.email
  };
  return publicProfile;
};

exports.avatarPlaceholders = [
  'https://i2.wp.com/smk.org.uk/wp-content/uploads/avatar.jpg',
  'https://img.trzcacak.rs/myfile/small/136-1363125_avatar-png-pic-male-avatar-icon-png.png',
  'https://siteolytics.com/wp-content/uploads/avatar-1.png'
];
