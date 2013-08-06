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

Template.login.events({
  'submit #login-form' : function(e, t) {
    e.preventDefault();

    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

    Meteor.loginWithPassword(email, password, function(err) {
      if (err) {
        alert('there was an error in your attempt, please try again')
      }
      else {
        // do successful login stuff here
      }
    })
  },

  'click #create-account' : function(e, t) {
    var options = {};
    options.email = t.find('#login-email').value;
    options.password = t.find('#login-password').value;

    if (options.email && options.password && options.password.length > 5) {
      Accounts.createUser(options, function(err) {
        if (err) {
          alert(err);
        }
      });
    } else {
      alert('please enter a valid email and password');
    }
  },

  'click .js-logout' : function(e) {
    Meteor.logout(function(err) {
      if (err) {
        alert('there was an error, oops')
      }
    })
  }
})
