// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyBg5TWmwmUTs1l69ZU4kc4EaqN0UNU5AqE",
    authDomain: "project-3365142681077444403.firebaseapp.com",
    databaseURL: "https://project-3365142681077444403.firebaseio.com",
    projectId: "project-3365142681077444403",
    storageBucket: "project-3365142681077444403.appspot.com",
    messagingSenderId: "91296622861"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contact88');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	comment: $('.com99').val(),

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});