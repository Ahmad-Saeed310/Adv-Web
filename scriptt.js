console.clear();

gsap.registerPlugin(ScrollTrigger);

const cardsWrappers = gsap.utils.toArray(".card-wrapper");
const cards = gsap.utils.toArray(".card");

cardsWrappers.forEach((wrapper, i) => {
  const card = cards[i];
  let scale = 1,
    rotation = 0;
  if (i !== cards.length - 1) {
    scale = 0.9 + 0.025 * i;
    rotation = -10;
  }
  gsap.to(card, {
    scale: scale,
    rotationX: rotation,
    transformOrigin: "top center",
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top " + (60 + 10 * i),
      end: "bottom 550",
      endTrigger: ".wrapper",
      scrub: true,
      pin: wrapper,
      pinSpacing: false,
      invalidateOnRefresh: true,
      
      id: i + 1
    }
  });
});




// the numbet copy
 function copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        
    }