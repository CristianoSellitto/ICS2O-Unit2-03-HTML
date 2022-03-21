// Cristiano
// ICS2O-Unit2-03-HTML
// March 21 2022


/**
 * Prints a name and an age.
 */
function onButtonClick() {
  const firstname = document.getElementById("first-name").value
  const age = parseInt(document.getElementById("age").value)
  if (age == 1) {
    document.getElementById("output").innerHTML = "<p>Your first name is " + firstname + " and you are " + age + " year old.</p>"
  } else {
    document.getElementById("output").innerHTML = "<p>Your first name is " + firstname + " and you are " + age + " years old.</p>"
  }
}
