function quote() {
  let number = prompt("Choose a number between 1 - 5");
  let message = "";

  switch (number) {
    case "1":
      message =
        "“Times of difficulty test our faith, our fortitude and our strength.” - Yasmin Mogahed, Reclaim Your Heart";
      break;
    case "2":
      message =
        "“If you seek Him, God can raise you up, and replace the darkness with light.” - Yasmin Mogahed, Reclaim Your Heart";
      break;
    case "3":
      message =
        "“The greatest victory is to rise from the ashes and rebuild yourself with love.” - Yasmin Mogahed, Reclaim Your Heart";
      break;
    case "4":
      message =
        "“You are never alone, for your heart is forever connected to the rhythm of the universe.” - Yasmin Mogahed, Reclaim Your Heart";
      break;
    case "5":
      message =
        "“Sometimes the very thing that breaks you can also heal you.” - Yasmin Mogahed, Reclaim Your Heart";
      break;
    default:
      message = "Please enter a number between 1 and 5!";
  }

  alert(message);
}

document.getElementById("quoteBtn").addEventListener("click", quote);
