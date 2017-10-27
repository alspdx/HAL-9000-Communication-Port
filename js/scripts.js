var hal9000 = function(_numberInput) {
  if (isNaN(_numberInput)) {
    return "I think you know what the problem is just as well as I do. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value, Dave."
  } else {
    return ""
  };
};

$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("#number-input").val());
    var outputMessage = hal9000(numberInput);
    $("#output-message").text(outputMessage);
  });
});
