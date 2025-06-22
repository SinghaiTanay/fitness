gsap.to(".page1", {
  opacity: 1,
  duration: 2,
  delay: 0.5,
  ease: "power2.out",
});
gsap.to(".page2", {
  transform: "translate(0%)",
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
    ease: "power2.in",
  },
});
gsap.to(".page3", {
  transform: "translate(0%)",
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
    ease: "power2.in",
  },
});
gsap.to(".page4", {
  transform: "translate(0%)",
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
    ease: "power2.in",
  },
});
gsap.to(".page5", {
  transform: "translate(0%)",
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".page5",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
    ease: "power2.in",
  },
});
gsap.to(".page6", {
  transform: "translate(0%)",
  opacity: 1,
  duration: 3,
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
    scrub: 2,
    ease: "power2.in",
  },
});
// gsap.to(".btm", {
//   opacity: 1,
//   duration: 2,
//   delay: 0.5,
//   ease: "power2.out",
// });

let content = [
    {
        imgUrl: "https://i.pinimg.com/736x/ae/d6/17/aed61742ab51be92ba87a77482bb08fb.jpg",
        title: "We provide premium courts for both individual and group training",
        des : "Our advanced sports facilities boast diverse <br> courts and fields for every athlete"

    },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1553451310-1416336a3cca?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Focused Determination on the Court",
    des: "Our eyes on the goal, heart in the game — greatness begins with focus.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1622893701124-87623e187661?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rise Through the Sweat",
    des: "Every drop of sweat is a step closer to the dream — push harder, rise stronger.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1743978006880-ae28eab92082?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Power in Motion",
    des: "Don’t just play the game — own every moment with purpose and passion.",
  },
  {
    imgUrl:
      "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Fuel the Fire Within",
    des: "Champions are made when no one is watching — train hard, stay relentless.",
  },
];

let index = 0;
function updateSlider() {
  const img = document.querySelector(".banImg");
  const title = document.querySelector(".banTitle");
  const des = document.querySelector(".banDes");
  const num = document.querySelector(".ids h1");

  gsap.to([img, title, des], {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      img.src = content[index].imgUrl;
      title.innerHTML = content[index].title;
      des.innerHTML = content[index].des;
      num.innerHTML = `<h1 class="text-xl text-white">${index + 1} <span class="text-black">/ ${content.length}</span></h1>`;

      gsap.to([img, title, des], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    },
  });
}
function nextSlide() {
  index = (index + 1) % content.length;
  updateSlider();
}
function prevSlide() {
  index = (index - 1 + content.length) % content.length;
  updateSlider();
}
window.onload = () => {
  updateSlider();
  setInterval(nextSlide, 4000); // Auto-slide every 4 seconds

  document.querySelector(".nextBtn").addEventListener("click", nextSlide);
  document.querySelector(".prevBtn").addEventListener("click", prevSlide);
};

document.querySelectorAll('#checklist-items input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.parentElement.classList.toggle('checked', cb.checked);
    });
  });

  document.getElementById('checklist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('new-item');
    const text = input.value.trim();
    if (text !== "") {
      const li = document.createElement("li");
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener('change', () => {
        label.classList.toggle('checked', checkbox.checked);
      });
      label.appendChild(checkbox);
      label.append(" " + text);
      li.appendChild(label);
      document.getElementById("checklist-items").appendChild(li);
      input.value = "";
    }
  });