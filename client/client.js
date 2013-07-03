Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
})

Template.posts.helpers({
  posts: function() {
    return Posts.find()
  },

  ownsPost: function(owner_id) {
    return Meteor.userId() === owner_id
  }
})
