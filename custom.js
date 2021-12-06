/*Start RANDOM GENERATOR JS */
let films = ['The Matrix', 'Gladiator', 'American sniper', '13hours', 'The Godfather', 'Full Metal Jacket', 
'The Hobbit', 'Joker', 'Peaky Blinders' , 'The 100' , 'Game Of Thrones', 'Money Heist', 'South Wind',
'Vikings', 'Arrow', 'Mayans MC'];

function generate() {
    const randomNumber = Math.floor(Math.random() * (films.length));
    let sentence = 'That is all from us';
    if (films.length > 0) {
       sentence = 'Wе recommend you: ' +  films[randomNumber];
films = films.filter((e, i) => i !== randomNumber);
       console.log('length of remaining scenario items:', films.length);
    }
    document.getElementById("sentence").innerHTML = sentence;
    document.querySelector("#sentence").style.visibility= 'visible' ;
}
generate();
/*End RANDOM GENERATOR JS */
/*Start CHANGEIMAGE JS */
function changeImage() {
    if (document.getElementById("changeImage").src == "https://andrewchallis.co.uk/img/night-mode.png") 
    {
        document.getElementById("changeImage").src = "https://cdn4.iconfinder.com/data/icons/multimedia-flat-30px/30/sun_light_mode_day-512.png";
    }
    else 
    {
        document.getElementById("changeImage").src = "https://andrewchallis.co.uk/img/night-mode.png";
    }
} 
changeImage();
/*Starting function for stopping animation */
function stopAnimate(){
    let element = document.getElementsByClassName("hintImage")
    element.getElementById(sentence).toggle("stop")
} 
stopAnimate();
/*END CHANGEIMAGE JS */
/*Start DARKMODE JS */
function modeDark() {
    var body = document.body;
    body.classList.toggle("dark-mode");
    var slider = document.getElementById("h1");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h2");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h3");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h4");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h5");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h6");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h7");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h8");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h9");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h10");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h11");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h12");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h13");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h14");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h15");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h16");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h17");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h18");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h19");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h20");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h21");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h22");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h23");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h24");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h25");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h26");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("h27");
    slider.classList.toggle("dark-mode")
    var slider = document.getElementById("border");
    slider.classList.toggle("dark-mode-border-line")
    var slider = document.getElementsByClassName("hintImage");
    slider.classList.toggle("dark-mode");
 }
 modeDark(); 
/*End DARKMODE JS */


