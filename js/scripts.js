$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#number-input").val());
    var outputMessage = hal9000(numberInput);
    $("#output-message").text(outputMessage);
  });
});
