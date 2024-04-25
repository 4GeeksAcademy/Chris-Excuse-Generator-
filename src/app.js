/* eslint-disable */
import "./style.css";

window.onload = () => {
  document.getElementById("btn").onclick = function() {
    let img = document.getElementById("img");
    let pics = [
      "https://cdn.pixabay.com/photo/2016/04/01/09/29/cartoon-1299393_640.png?w-5",
      "https://cdn.pixabay.com/photo/2015/02/10/10/59/clown-630883_640.jpg?w-5",
      "https://cdn.pixabay.com/photo/2017/05/16/10/10/shark-2317422_640.png?w-5",
      "https://cdn.pixabay.com/photo/2014/08/21/14/51/dog-423398_640.jpg?w-5",
      "https://cdn.pixabay.com/photo/2016/06/13/04/44/racoon-1453600_640.jpg?w-5",
      "https://cdn.pixabay.com/photo/2016/01/13/17/09/ninja-1138493_1280.png?w-5",
      "https://cdn.pixabay.com/photo/2018/02/10/21/05/sci-fi-3144558_640.png?w-5",
      "https://cdn.pixabay.com/photo/2016/11/19/14/28/bed-1839564_640.jpg?w-5"
    ];

    let person = [
      "A dinosaur",
      "A clown",
      "A shark",
      "My dog",
      "A racoon",
      "The Ninja Turtles",
      "An Alien",
      "A baby"
    ];
    let action = [
      "bit my",
      "stole my",
      "set fire to my",
      "destroyed my",
      "ran over my",
      "yelled at my"
    ];
    let posession = [
      "arm",
      "car",
      "phone",
      "house",
      "laptop",
      "spouse",
      "children",
      "clothes"
    ];
    let time = [
      "before I could leave",
      "when I walked outside",
      "on my way to work",
      "on my way to class",
      "while I was sleeping"
    ];

    let randomIdx = Math.floor(Math.random() * person.length);
    let perIndxR = person[randomIdx];
    let picsR = pics[randomIdx];
    let actIndxR = action[Math.floor(Math.random() * action.length)];
    let posIndxR = posession[Math.floor(Math.random() * posession.length)];
    let timIndxR = time[Math.floor(Math.random() * time.length)];
    img.src = picsR;

    document.getElementById("excuse").innerHTML =
      // best practice for string
      //  perIndxR + " " + actIndxR + " " + posIndxR + " " + timIndxR;
      `${perIndxR} ${actIndxR} ${posIndxR} ${timIndxR}`;
  };
};
