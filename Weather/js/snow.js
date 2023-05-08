const body = document.querySelector("body");
    const MIN_DURATION = 10;

    function fallingsnow() {

      function makesnow() {
        const snowflake = document.createElement("div");
        const delay = Math.random() * 10;
        const initalOpacity = Math.random();
        const duration = Math.random() * 20 + MIN_DURATION;

        snowflake.classList.add("snow");
        snowflake.style.left = `${Math.random() * window.screen.width + 200}px`;
        snowflake.style.animationDelay = `${delay}s`;
        snowflake.style.opacity = initalOpacity;
        snowflake.style.animation = `fall ${duration}s linear`;

        body.appendChild(snowflake);

        setTimeout(() => {
          body.removeChild(snowflake);
          makesnow()
        }, (duration + delay) * 1000);
      }

      makesnow();
      for (let index = 0; index < 500; index++) {
        setTimeout(makesnow, 500 * index);
      }
    }