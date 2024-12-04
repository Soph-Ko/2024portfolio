document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const services = gsap.utils.toArray(".image-total-box");

  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
  };

  const observeCallback = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              const service = entry.target;
              const imgContainers = service.querySelectorAll(".one_image");

              imgContainers.forEach((imgContainer) => {
                  gsap.set(imgContainer, { scale: 0.8 });

                  ScrollTrigger.create({
                      trigger: imgContainer,
                      start: "top bottom",
                      end: "top top",
                      scrub: true,
                      onEnter: () => {
                          gsap.fromTo(
                              imgContainer,
                              { scale: 0.8 },
                              { scale: 1, duration: 0.5, ease: "power2.out" }
                          );
                      },
                      onLeaveBack: () => {
                          gsap.fromTo(
                              imgContainer,
                              { scale: 1 },
                              { scale: 0.8, duration: 0.5, ease: "power2.out" }
                          );
                      },
                  });
              });

              observer.unobserve(service);
          }
      });
  };

  const observer = new IntersectionObserver(observeCallback, observerOptions);

  services.forEach((service) => {
      observer.observe(service);
  });
});
