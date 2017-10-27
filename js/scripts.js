var zeroRegex = /[0]/;
    oneRegex = /[1]/;
    zeroOneRegex = /[01]/;
    numRegex = /[0-9]/;
    userName = "";

var nameValidator = function(_userName) {
  if (_userName) {
    userName = _userName;
    return "Hello " + _userName;
  } else {
    return "A name was not entered. It can only be attributable to human error.";
  };
};

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
    var nameInput = $("#name-input").val();
    var helloMessage = nameValidator(nameInput);
    if (nameInput) {
      $("#hello-message").text(helloMessage);
      $("#number-button").text("Enter a number, " + userName);
      $("#no-name-error").hide();
      $(this).slideUp();
      $("#user-input").slideDown();
    } else {
      $("#no-name-error").text(helloMessage);
    };
  });

  $("#user-input").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#number-input").val();
    var outputMessage = numberProcessor(numberInput);
    $("#output-message").html(outputMessage);
  });
});
