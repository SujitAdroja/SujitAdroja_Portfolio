const img = document.querySelectorAll(".project-img");
const sectionAll = document.querySelectorAll(".section");
const projectAll = document.querySelectorAll(".project");
const closeBtnSidebar = document.querySelector(".icon-close-menu");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const openSidebar = document.querySelector(".icon-menu");
const linkClose = document.querySelector(".sidebar-list");
const sectionObserver = new IntersectionObserver(
  function ([entry], observer) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.2,
  }
);

const projectObserver = new IntersectionObserver(
  function ([entry], observer) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("project-hidden");
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0.2,
  }
);
//onclick link close sidebar

linkClose.addEventListener("click", function (e) {
  if (e.target.classList.contains("link")) {
    sidebarWrapper.classList.remove("open");
  }
});
const init = function () {
  // image animation
  img.forEach((image) =>
    image.addEventListener("mouseenter", (e) => {
      console.log(image);
      image.style.transform = `translateY(-${
        e.target.getBoundingClientRect().height - 300
      }px)`;
    })
  );
  img.forEach((image) =>
    image.addEventListener("mouseleave", (e) => {
      image.style.transform = `translateY(0px)`;
    })
  );
  //section animation
  sectionAll.forEach((section) => {
    sectionObserver.observe(section);
    section.classList.add("hidden");
  });

  // project animation
  projectAll.forEach((project) => {
    projectObserver.observe(project);
    project.classList.add("project-hidden");
  });
  // open close sidebar
  openSidebar.addEventListener("click", function () {
    sidebarWrapper.classList.add("open");
  });
  closeBtnSidebar.addEventListener("click", function () {
    sidebarWrapper.classList.remove("open");
  });
};
window.addEventListener("load", init);
