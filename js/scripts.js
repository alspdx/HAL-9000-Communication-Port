var zeroRegex = /[0]/;
    oneRegex = /[1]/;
    zeroOneRegex = /[01]/;
    numRegex = /^[0-9]*$/;
    errorNaN = "I think you know what the problem is just as well as I do. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value, Dave."

var beepBoop = function(number) {
  if (!zeroOneRegex.test(number)) {
    return number;
  } else if (!zeroRegex.test(number)) {
    return "Boop"
  } else {
    return "Beep";
  };
};

var outputStringify = function(numArray) {
  var outputString = numArray.map(function(number) {
    return beepBoop(number);
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
    return outputStringify(countToNumber(parseInt(_numberInput)));
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
