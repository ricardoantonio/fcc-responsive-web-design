const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;

// list of elements to be observed
const targets = document.getElementsByClassName("section-page");

const options = {
  root: null, // null means root is viewport
  rootMargin: "0px",
  threshold: 0.5, // trigger callback when 50% of the element is visible
};

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".active").classList.remove("active");
      const sectionId = entry.target.id; // identify which element is visible in the viewport at 50%
      document.querySelector(`[href="#${sectionId}"]`).classList.add("active");
    }
  });
}

let observer = new IntersectionObserver(callback, options);

[...targets].forEach((target) => observer.observe(target));
