$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    var formData = $(this).serialize();

    $("#contactFirstDiv").hide();
    $("#contactFirstList").hide();
    $("#contactSecondDiv").show();

    $.ajax({
      type: "POST",
      url:
        "https://script.google.com/macros/s/AKfycbxNwGZrXowpHvfPkJQ7aLZo384UxbwkPRyF0oabXw/exec",
      data: formData,
      dataType: "html",
    });

    e.preventDefault();
   });
});

function onOpenContacts() {
  $("#contactForm")[0].reset();
  $("#contactFirstDiv").show();
  $("#contactFirstList").show();
  $("#contactSecondDiv").hide();
}
