Accounts.config({
  sendVerificationEmail: true
})

Accounts.onCreateUser(function(options, user) {
  var digested_email = CryptoJS.MD5(options.email).toString();
  var profile = {};
  profile.avatar_url = 'https://secure.gravatar.com/avatar/' + digested_email;
  user.profile = profile;

  return user;
})

Meteor.methods({

  add_post: function(post_text) {
    if (post_text.length) {
      Posts.insert({name: post_text, owner_id: Meteor.userId()})
    }
  },

  delete_post: function(post_id) {
    Posts.remove(post_id)
  }
})
