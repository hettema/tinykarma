Template.userProfile.rendered = function(){

}

Template.userProfile.helpers({
  twitterDetails: function(){
    var details = Meteor.user().services.twitter
    return details;
  }
});
