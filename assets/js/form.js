var $form = $('form#contact-form'), $subscriptionform = $('form#subscription-form'),
    url = 'https://script.google.com/macros/s/AKfycbxXb6a4wDxq0Ao2nNvaTTz54in4Pj-ipk9qMKn_ZXZpSuaFbBA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeJSON(),
  }).success(document.getElementById("contact-form").innerHTML="Thank you for contacting us!<br />We will get back to you shortly");
})

$('#subscribe-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $subscriptionform.serializeJSON(),
  }).success(document.getElementById("subscription-form").innerHTML="You have been successfully added to the list");
})
