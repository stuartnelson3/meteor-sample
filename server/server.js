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
