//setting box

//js

//document.querySelector(".sit .toggle i").onclick = function() {
//  this.classList.toggle("fa-spin");
//  document.querySelector(".sit").classList.toggle("open");
//};

//website color control
$(function () {
  "use strict";
  $(".sit i").on("click", function () {
    $(this).toggleClass("fa-spin");
    $(".sit").toggleClass("open");
  });

  $(".color ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    let colorr = $(this).data("color");

    document.documentElement.style.setProperty("--main-color", colorr);

    $(".main-color").css({
      color: colorr,
    });

    $("before").css({
      color: colorr,
    });

    $(".main-back").css({
      backgroundColor: colorr,
    });

    $(".landing ul a").hover(
      function () {
        $(this).css({
          color: colorr,
        });
      },
      function () {
        if (!$(this).is(":first-child")) {
          $(this).css({
            color: "whitesmoke",
          });
        }
      }
    );
  });
});

// random landing control

$(function () {
  "use strict";

  let landing = document.querySelector(".landing");

  let imageArray = ["04.jpeg", "02.jpeg", "03.jpeg", "06.jpeg"];

  let back;
  let randomNum;

  back = setInterval(() => {
    randomNum = Math.floor(Math.random() * imageArray.length);
    landing.style.backgroundImage =
      'url("imgas/' + imageArray[randomNum] + '")';
  }, 2000);
  $(".landingcontrol button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).hasClass("yes")) {
      back = setInterval(() => {
        randomNum = Math.floor(Math.random() * imageArray.length);
        landing.style.backgroundImage =
          'url("imgas/' + imageArray[randomNum] + '")';
      }, 3000);
    } else {
      clearInterval(back);
    }
  });
});

//skiles control

$(function () {
  "use strick";

  //  console.log($(".about").offset().top);
  let sc = $(".about").offset().top;

  let dat = $(".last  .fir").data("value");
  let dat2 = $(".last  .sec").data("value");
  let dat3 = $(".last .thr").data("value");

  console.log(dat);
  console.log(dat2);
  console.log(dat3);

  $(window).scroll(function () {
    if ($(this).scrollTop() >= sc) {
      $(".last .fir").animate(
        {
          width: dat,
        },
        1000
      );
      $(".last .sec").animate(
        {
          width: dat2,
        },
        1000
      );
      $(".last .thr").animate(
        {
          width: dat3,
        },
        1000
      );
    }
  });
});

//create pop up js

let ourGallery = document.querySelectorAll(".gall img");

ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    //create overly
    let overly = document.createElement("div");

    //add to class overly
    overly.className = "popup-overly";

    //apend overly to body

    document.body.appendChild(overly);

    //create popup
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    //creat img
    let popupImg = document.createElement("img");
    popupImg.src = img.src;

    //add img to popupBox
    popupBox.appendChild(popupImg);

    //add popupBox to overly
    document.body.appendChild(popupBox);

    //create close span
    let sp = document.createElement("span");
    let closeButton = document.createTextNode("x");

    sp.appendChild(closeButton);

    //add class to sp
    sp.className = "close";
    //    sp.classList.add("main-back");

    //add sp to popupBox
    popupBox.appendChild(sp);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overly").remove();
  }
});

//$(function(){
//   "use strict";
//
//    $(".gall img").click(function(){
//
//        $("body").append("<div class='pop'></div>");
//        $(".pop").append("<div class='po'></div>");
//
//
//        $(".po").append("<img>" );
//
//        console.log($(".gall img").src)
//
//    })
//
//});

//remove popup
