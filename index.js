document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".anim");
  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    images.forEach((image) => {
      const ratioX = -image.getAttribute("ratioX");
      const ratioY = -image.getAttribute("ratioY");
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) * ratioX;
      const moveY = (clientY - centerY) * ratioY;

      image.style.transform = `translate(${moveX}px,${moveY}px)`;
    });
  });
});
