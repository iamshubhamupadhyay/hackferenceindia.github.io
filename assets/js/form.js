var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbxXb6a4wDxq0Ao2nNvaTTz54in4Pj-ipk9qMKn_ZXZpSuaFbBA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeJSON(),
  }).success(document.getElementById("form-will-change-text").innerHTML="Thank you for contacting us, we will get back to you shortly");
})
