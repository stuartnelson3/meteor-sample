Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId) {
    return !!userId
  },

  remove: function(userId, post) {
    return userId && post.owner_id === userId
  }
})

Posts.deny({})
