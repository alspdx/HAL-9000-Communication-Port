var numTest = /^[0-9]*$/
var errorNaN = "I think you know what the problem is just as well as I do. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value, Dave."

var countToNumber = function(inputNumValue) {
  var countArray = [];
  for (i = 0; i <= inputNumValue; i++) {
    countArray.push(i);
  }
  return countArray.join(", ");
};

var hal9000 = function(_numberInput) {
  var inputArray = _numberInput.split("");
  if (!numTest.test(_numberInput)) {
    return errorNaN
  } else {
    return countToNumber(parseInt(_numberInput));
  }
};

$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#number-input").val();
    var outputMessage = hal9000(numberInput);
    $("#output-message").text(outputMessage);
  });
});
