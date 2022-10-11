function submit() {
  // Retrieve the info from html
  var outputText = "";
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const date = document.getElementById("date").value;
  const cheese = document.getElementById("cheese").value;
  const datePattern = new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}");
  const textPattern = new RegExp("^[a-zA-Z]+$");

  //Calculate the age
  const yearOfBirth = date.match(/[0-9]{4}$/);
  const age = 2022 - yearOfBirth;

  // Cities checkboxes cases
  var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  var citiesChecked = [];
  for (var i = 0; i < checkboxes.length; i++) {
    citiesChecked.push(checkboxes[i].value);
  }

  //limitation
  if (
    firstName.length >= 50 ||
    firstName.length <= 3 ||
    !textPattern.test(firstName)
  ) {
    document.getElementById("outputText").innerHTML =
      "Do not enter an invalid firstname";
  } else if (
    lastName.length >= 50 ||
    lastName.length <= 3 ||
    !textPattern.test(lastName)
  ) {
    document.getElementById(
      "outputText"
    ).innerHTML = `Do not enter an invalid lastname`;
  } else if (!datePattern.test(date)) {
    document.getElementById("outputText").innerHTML =
      "Do not enter an invalid date of birth";
  } else if (citiesChecked.length == 0) {
    document.getElementById(
      "outputText"
    ).innerHTML = `Hello ${firstName} ${lastName}, you are ${age} years old, your favourite cheese is ${cheese} and you're lived in no cities.`;
  } else {
    document.getElementById(
      "outputText"
    ).innerHTML = `Hello ${firstName} ${lastName}, you are ${age} years old, your favourite cheese is ${cheese} and you're lived in${citiesChecked}.`;
  }
}

// Function for the remove button
function removeText() {
  document.getElementById("outputText").innerHTML = "";
}
