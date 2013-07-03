$(document).on('click', '.js-create-post', function(e) {
  var $input = $('.js-post-input')
  var post = $input.val()
  Posts.insert({name: post, owner_id: Meteor.userId()})
  $input.val('Add text here..')
})

$(document).on('focus', '.js-post-input', function(e) {
  $(e.target).val('')
})

$(document).on('click', '.js-destroy-post', function(e) {
  var $button = $(e.currentTarget)
  var post_id = $button.data('id')
  Posts.remove(post_id)
})
