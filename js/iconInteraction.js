document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".flex").forEach((flexItem) => {
    flexItem.addEventListener("click", function () {
      const plusIcon = this.querySelector(".plusicon"); // 해당 .flex 내부의 .plusicon 찾기
      const hiddenText = this.nextElementSibling.nextElementSibling; // .flex 바로 아래의 .hidden-text 찾기

      // Rotate the plus icon with GSAP
      const isRotated = plusIcon.classList.toggle("rotated");
      gsap.to(plusIcon, {
        rotate: isRotated ? 45 : 0, // Rotate to 45 degrees when active, 0 when not
        duration: 0.3,
        ease: "power2.out"
      });

      // Toggle and animate the hidden text (summary_list_grey는 영향을 주지 않음)
      if (hiddenText.classList.contains("visible")) {
        // Hide the text with slide-up and fade-out animation
        gsap.to(hiddenText, {
          opacity: 0,
          maxHeight: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => hiddenText.classList.remove("visible")
        });
      } else {
        // Show the text with slide-down and fade-in animation
        hiddenText.classList.add("visible");
        gsap.fromTo(hiddenText, 
          { opacity: 0, maxHeight: 0 }, 
          { opacity: 1, maxHeight: 200, duration: 0.5, ease: "power2.inOut" }
        );
      }
    });
  });
});