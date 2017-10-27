var zeroRegex = /[0]/
var numRegex = /^[0-9]*$/
var errorNaN = "I think you know what the problem is just as well as I do. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value, Dave."

var beepZeros = function(number) {
  if (!zeroRegex.test(number)) {
    return number;
  } else {
    return "Beep";
  };
};

var outputStringify = function(numArray) {
  var outputString = numArray.map(function(number) {
    return beepZeros(number);
  });
  return outputString.join(", ");
};

var countToNumber = function(inputNumValue) {
  var countArray = [];
  for (i = 0; i <= inputNumValue; i++) {
    countArray.push(i.toString());
  }
  return countArray;
};

var hal9000 = function(_numberInput) {
  var inputArray = _numberInput.split("");
  if (!numRegex.test(_numberInput)) {
    return errorNaN;
  } else {
    var outputArray = countToNumber(parseInt(_numberInput));
    return outputStringify(outputArray);
  };
};

$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#number-input").val();
    var outputMessage = hal9000(numberInput);
    $("#output-message").text(outputMessage);
  });
});
