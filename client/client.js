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

Template.posts.events({
  'click .js-destroy-post': function(e) {
    var post_id = e.target.getAttribute('data-id')
    Meteor.call('delete_post', post_id)
  }
})

Template.make_post.events({
  'click .js-create-post': function(e) {
    var post_selector = e.target.getAttribute('data-source')
    var post_element = document.querySelector(post_selector)
    Meteor.call('add_post', post_element.value)
    post_element.value = 'Add text here..'
  },

  'focus .js-post-input': function(e) {
    e.target.value = ''
  }
})
