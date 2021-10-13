let username = "John";
console.log(
  "Hello " +
    username +
    "! This is a test to determine your password is at least 10 characters long."
);
let password = prompt("Please enter your password");
checkPassword(password);

function checkPassword(str) {
  if (str.length >= 10) {
    return console.log(
      "Your password is at least 10 characters long! Logging in..."
    );
  } else {
    return console.log(
      "Your password is not 10 characters long. This program will self-destruct now."
    );
  }
}
