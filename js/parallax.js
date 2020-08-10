$(document).ready(() => {
  let parallaxInstance;

  $(window).on("load", function () {
    parallaxInstance = moonsScene();

    homeInFirst();
  });

  // let fullPage = new fullpage("#fullpage", {
  //   autoScrolling: true,
  //   scrollHorizontally: true,
  //   easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  //   scrollingSpeed: 1e3,
  //   anchors: ["home", "1"],
  //   onLeave: (origin, destination, direction) => {
  //     if (origin) {
  //       handleCurrentSection(destination.index, origin.index);
  //     }

  //     if (destination.index === 0) {
  //       parallaxInstance = moonsScene();
  //       homeIn();
  //     } else if (destination.index === 1) {
  //       homeOut();

  //       anime({
  //         targets: ".about__image--cover",
  //         translateY: [0, "110%"],
  //         translateZ: 0,
  //         easing: "easeInOutQuart",
  //         duration: function(el, i) {
  //           return 1200 - 200 * i;
  //         }
  //       });
  //       anime({
  //         targets: ".about__image--number-box",
  //         translateY: ["100%", 0],
  //         easing: "easeInOutQuart",
  //         duration: 1400
  //       });
  //       anime({
  //         targets: ".animate-page-1",
  //         translateX: ["-105%", 0],
  //         easing: "easeInOutCubic",
  //         duration: 800,
  //         delay: function(el, i) {
  //           return 50 * i;
  //         }
  //       });
  //       anime({
  //         targets: ".about-bold-lines",
  //         width: [0, "10rem"],
  //         opacity: [0, 1],
  //         translateX: ["-5rem", 0],
  //         easing: "easeInOutCubic",
  //         duration: 1000
  //       });
  //       anime({
  //         targets: ".about__image",
  //         scale: [0.85, 1],
  //         easing: "easeInOutQuart",
  //         duration: 1200
  //       });
  //     }
  //   }
  // });

  function handleCurrentSection(index, prevIndex) {
    let prevElem = document.querySelector(`#nav-link--${prevIndex}`);
    let nextElem = document.querySelector(`#nav-link--${index}`);

    prevElem.classList.remove("navigation--link__selected");
    nextElem.classList.add("navigation--link__selected");
  }
});
