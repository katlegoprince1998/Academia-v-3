// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Good day, how can I assist you?";
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "Please type below to ask your question!";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("I love this!");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

function getBotResponse(input) {
  if (
    input == "hi" ||
    input == "Hi" ||
    input == "HI" ||
    input == "Good day" ||
    input == "ood day" ||
    input == "Good Day" ||
    input == "Good morning" ||
    input == "good morning" ||
    input == "Good Gorning" ||
    input == "good afternoon" ||
    input == "Good Afternoon" ||
    input == "Good afternoon" ||
    input == "Hello" ||
    input == "hello" ||
    input == "HELLO"
  ) {
    return "Good day, how may I assist you?";
  } else if (
    input == "What is the history of the school" ||
    input == "School history"
  ) {
    return "Mzamomtsha, Primary School is located between Khayelistha Township and Umfuleni Township in the Western Cape Province of the Republic of South Africa.The schools headmaster, Mr. Simphiwe Khuze, joined in 2007. The school is located in a semi-township called Drift Sands which started off as an     informal settlement. Drift Sands has since been developed and with support from the South African  government it turned into a sprawling township with state of the art housing units.";
  } else if (
    input == "School values" ||
    input == "school values" ||
    input == "School Values"
  ) {
    return "1. We believe that all students can achieve at high levels.<br> 2. We believe that all students deserve a fair chance to succeed. <br> 3.  We believe that learning is enhanced by a strong community. 4.  We are committed to continuous improvement.";
  } else if (
    input == "School Vision" ||
    input == "School vison" ||
    input == "school visoon" ||
    input == "school Vision"
  ) {
    return "Our vision is to develop well rounded, confident and responsible individuals  who aspire to achieve their full potential. We will do this by providing a welcoming, happy, safe, and supportive learning environment in which everyone is equal and all  achievements are celebrated.";
  } else if (input == "bye" || input == "Bye") {
    return "Bye!! Enjoy day..";
  }
}
