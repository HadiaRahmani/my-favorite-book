function quote() {
  let number = prompt("Choose a number between 1 - 5");
  if (number == 1) {
    alert(
      "“Times of difficulty test our faith, our fortitude and our strength. During these times, the level of our Imaan becomes manifest.” -Yasmin Mogahed, Reclaim Your Heart"
    );
  } else if (number == 2) {
    alert(
      "“If you seek Him, God can raise you up, and replace the darkness of the ocean, with the light of His Sun.” - Yasmin Mogahed, Reclaim Your Heart"
    );
  } else if (number == 3) {
    alert(
      "“The greatest victory is to rise from the ashes and rebuild yourself with love and resilience.” - Yasmin Mogahed, Reclaim Your Heart"
    );
  } else if (number == 4) {
    alert(
      "“You are never alone, for your heart is forever connected to the beating rhythm of the universe.” - Yasmin Mogahed, Reclaim Your Heart"
    );
  } else if (number == 5) {
    alert(
      "“Sometimes the very thing that breaks you can also heal you.” - Yasmin Mogahed, Reclaim Your Heart"
    );
  }
}

let qouteButton = document.querySelector("button");
qouteButton.addEventListener("click", quote);
