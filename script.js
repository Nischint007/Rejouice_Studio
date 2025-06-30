const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

ScrollTrigger.refresh();

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0);


const cursor = document.querySelector("#cursor");

let cursorInitialized = false;

document.addEventListener("mousemove", function (e) {
  if (!cursorInitialized) {
    gsap.set(cursor, {
      x: e.clientX,
      y: e.clientY,
      opacity: 1,
      ease: "power2.out",
      duration: 1
    });
    cursorInitialized = true;
  }

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 1,
    ease: "slow.out"
  });
});

const tl = gsap.timeline();
const headings = document.querySelectorAll("#loader-text span");

tl.from("#loader-text-2", {
  opacity: 0,
  y: -40,
  duration: 0.5,
  ease: "slow.out"
});

tl.from(headings, {
  x: -500,
  duration: 0.5,
  opacity: 0,
  ease: "slow.out",
  stagger: 0.5,
});

tl.to("#loader-text-2", {
  opacity: 0,
  y: -40,
  duration: 0.5,
  ease: "slow.out"
});

tl.to(headings, {
  y: -40,
  opacity: 0,
  ease: "slow.out",
  duration: 0.5,
  stagger: 0.3
});

tl.to("#loader", {
  top: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "slow.out"
});

tl.to("#loader", {
  display: "none"
});
tl.from("#left-nav a", {
  opacity: 0,
  y: -40,
  duration: 0.5,
  ease: "slow.out"
});
tl.fromTo("#heading1",
  { y: -50, skewY: -15, opacity: 0 },
  {
    y: 0,
    skewY: 0,
    duration: 0.6,
    opacity: 1,
    ease: "sine.out",
    immediateRender: false
  });
tl.from("#heading2", {
  opacity: 0,
  duration: 0.35,
  ease: "slow.out",
  skewY: -20
}, "anim");

tl.from("#heading3", {
  opacity: 0,
  duration: 0.35,
  ease: "slow.out",
  skewY: -20
}, "anim");

tl.from("#bottom-arrow", {
  opacity: 0,
  duration: 0.8,
  ease: "slow.out",
  rotate: "360deg"
}, "anim");
tl.from("#video-container video", {
  opacity: 0,
  duration: 0.4,
  ease: "slow.out"
}, "anim");

const sound = new Howl({
  src: ["Mouse_Click_Sound.mp3"],
  volume: 0.15
});

const nav = document.querySelectorAll("#middle-nav a");

nav.forEach(link => {
  link.addEventListener("click", () => {
    sound.play();
  });
});

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {                                                // Desktop GSAP Code

  const img = document.querySelector("#page4 img");

  img.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "20vw",
      height: "50vh",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(img, {
        opacity: 0.5,
        duration: 0.35,
        ease: "power4.out"
      }),
      cursor.innerHTML =
      '<video src="Rejouice_Video.mp4" autoplay muted loop playsinline disablePictureInPicture></video>'
  });

  img.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(img, {
        opacity: "",
        durtaion: 0.35,
        ease: "power4.out"
      }),
      cursor.innerHTML = ""
  });

  const video = document.querySelector("#page2 video");

  video.addEventListener("mouseenter", function (e) {
    gsap.to(cursor, {
      width: "140px",
      height: "140px",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "50%",
      backgroundColor: "#F26B0F",
      color: "white",
      whiteSpace: "nowrap",
    })
    cursor.innerHTML = '<i class="ri-play-mini-fill"></i> Play Reel'
  });
  video.addEventListener("mouseleave", function (e) {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "",
      backgroundColor: "",
    })
    cursor.innerHTML = ""
  });

  const container1 = document.querySelector("#page5-container img");
  const container2 = document.querySelector("#page5-container-2 img");

  container1.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "20vw",
      height: "50vh",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(container1, {
        opacity: 0.5,
        duration: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML =
      '<video src="https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4" autoplay muted loop playsinline disablePictureInPicture></video>'
  });

  container1.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(container1, {
        opacity: "",
        durtaion: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML = ""
  });

  container2.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "20vw",
      height: "50vh",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(container2, {
        opacity: 0.5,
        duration: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML =
      '<video src="https://videos.pexels.com/video-files/857195/857195-sd_640_360_25fps.mp4" autoplay muted loop playsinline disablePictureInPicture></video>'
  });

  container2.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(container2, {
        opacity: "",
        durtaion: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML = ""
  });

  gsap.to("#page6-video", {
    scale: 1.5,
    duration: 2,
    ease: "none",
    force3D: true,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 70%",
      end: "bottom 120%",
      scrub: true,
    }
  });
  const bottomHeading = document.querySelectorAll("#page8-heading-bottom span");

  gsap.from(bottomHeading, {
    y: 80,
    opacity: 0,
    duration: 2,
    skewY: 40,
    stagger: 0.15,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#page8",
      scroller: "body",
      start: "top 10%",
      end: "bottom 110%",
      once: true,
      scrub: 5,
    }
  });
});

mm.add("(max-width: 768px)", () => {                                                  // Mobile GSAP Code
  const img = document.querySelector("#page4 img");

  img.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(img, {
        opacity: 1,
        duration: 0.35,
        ease: "power4.out"
      }),
      cursor.innerHTML =
      ''
  });

  img.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(img, {
        opacity: "",
        durtaion: 0.35,
        ease: "power4.out"
      }),
      cursor.innerHTML = ""
  });
  
  const video = document.querySelector("#page2 video");

  video.addEventListener("mouseenter", function (e) {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "",
      backgroundColor: "",
      color: "",
    })
    cursor.innerHTML = ''
  });
  video.addEventListener("mouseleave", function (e) {
    gsap.to(cursor, {
      width: "",
      height: "",
      mixblendMode: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "",
      backgroundColor: "",
    })
    cursor.innerHTML = ""
  });


  const container1 = document.querySelector("#page5-container img");
  const container2 = document.querySelector("#page5-container-2 img");

  container1.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "none",
      height: "none",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(container1, {
        opacity: 1,
        duration: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML =
      '<video src='
  });

  container1.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(container1, {
        opacity: "",
        durtaion: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML = ""
  });

  container2.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      width: "none",
      height: "none",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: "0%",
    }),
      gsap.to(container2, {
        opacity: 1,
        duration: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML =
      '<video src='
  });

  container2.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      width: "",
      height: "",
      duration: 0.35,
      ease: "slow.out",
      borderRadius: ""
    }),
      gsap.to(container2, {
        opacity: "",
        durtaion: 0.35,
        ease: "slow.out"
      }),
      cursor.innerHTML = ""
  });
  gsap.to("#page6-video", {
    scale: 1.5,
    duration: 2,
    ease: "none",
    force3D: true,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "body",
      start: "top 70%",
      end: "bottom 120%",
      scrub: true,
    }
  });
});