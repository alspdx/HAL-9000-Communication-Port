var zeroRegex = /[0]/;
    oneRegex = /[1]/;
    zeroOneRegex = /[01]/;
    numRegex = /^[0-9]*$/;
    errorNaN = "I think you know what the problem is just as well as I do. This mission is too important for me to allow you to jeopardize it. Please enter a numerical value, Dave."
    errorMultipleOfThree = "I'm sorry, Dave. I'm afraid I can't do that."

var numberEvaluator = function(number) {
  if ((parseInt(number) % 3 === 0) && (parseInt(number) !== 0)) {
    return errorMultipleOfThree
  } else if (!zeroOneRegex.test(number)) {
    return number;
  } else if (!zeroRegex.test(number)) {
    return "Boop"
  } else if (!oneRegex.test(number)){
    return "Beep";
  } else {
    return "Beep-Boop"
  };
};

var outputStringify = function(numArray) {
  var outputString = numArray.map(function(number) {
    return numberEvaluator(number);
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
