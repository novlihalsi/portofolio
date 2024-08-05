import gsap from "gsap";

export const animateRevealContent = () => {
  const contents = gsap.utils.toArray(".reveal-content");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contents.forEach((content: any) => {
    gsap.from(content, {
      y: 100,
      opacity: 0,

      scrollTrigger: {
        trigger: content,
      },
    });
  });
};
