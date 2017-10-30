var zeroRegex = /[0]/;
    oneRegex = /[1]/;
    zeroOneRegex = /[01]/;
    numRegex = /[0-9]/;
    alphaRegex = /[a-zA-Z]/;
    userName = "";


var numberEvaluator = function(number) {
  if ((parseInt(number) % 3 === 0) && (parseInt(number) !== 0)) {
    return "I'm sorry, " + userName + ". I'm afraid I can't do that.";
  } else if (!zeroOneRegex.test(number)) {
    return number;
  } else if (!zeroRegex.test(number)) {
    return "Boop";
  } else if (!oneRegex.test(number)) {
    return "Beep";
  } else {
    return "Beep-Boop";
  };
};

var outputStringify = function(numArray) {
  var outputString = numArray.map(function(number) {
    return numberEvaluator(number);
  });
  return outputString.join("<br>");
};

var countToNumber = function(inputNumValue) {
  var countArray = [];
  for (i = 0; i <= inputNumValue; i++) {
    countArray.push(i.toString());
  };
  return countArray;
};

var numberProcessor = function(_numberInput) {
  var inputArray = _numberInput.split("");
  if (!numRegex.test(_numberInput)) {
    return "I think you know what the problem is just as well as I do, " + userName + ". This mission is too important for me to allow you to jeopardize it.<br>Please enter a numerical value.";
  } else {
    return outputStringify(countToNumber(parseInt(_numberInput)));
  };
};

$(function() {
  $("#hellobutton").click(function() {
    $("#hello").slideUp();
    $("#user-name").slideDown();
  });

  $("#user-name").submit(function(event) {
    event.preventDefault();
    userName = $("#name-input").val();
    $("#hal").hide();
    if (alphaRegex.test(userName)) {
      $("#name-output").text("Hello, " + userName);
      $("#number-button").text("Enter a number, " + userName);
      $("#name-message").text("That's an odd name.");
      $(this).slideUp();
      $("#user-input").slideDown();
    } else {
      $("#name-output").text("ERROR")
      $("#name-message").text("A name was not entered.");
    };
  });

  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#number-input").val();
    var outputMessage = numberProcessor(numberInput);
    $("#output-message").html(outputMessage);
  });
});
