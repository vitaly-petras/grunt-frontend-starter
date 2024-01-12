import Collapse from "bootstrap/js/src/collapse";

function setActiveClass(element) {
  const classActive = element.dataset.collapseClassActive;
  const classInactive = element.dataset.collapseClassInactive;

  if (classInactive) element.classList.remove(...classInactive.split(" "));
  if (classActive) element.classList.add(...classActive.split(" "));
}

function setInactiveClass(element) {
  const classActive = element.dataset.collapseClassActive;
  const classInactive = element.dataset.collapseClassInactive;

  if (classActive) element.classList.remove(...classActive.split(" "));
  if (classInactive) element.classList.add(...classInactive.split(" "));
}

function findAndProcessClassTogglersIfExists(triggers, state) {
  [...triggers].forEach(trigger => {
    const classToggler = findClassToggler(trigger);

    if (classToggler && state === "active") {
      setActiveClass(classToggler);
    } else if (classToggler && state === "inactive") {
      setInactiveClass(classToggler);
    }
  });
}

function findAndProcessTextTogglersIfExists(triggers, state) {
  [...triggers].forEach(trigger => {
    const textToggler = findTextToggler(trigger);

    if (textToggler && state === "active") {
      textToggler.textContent = textToggler.dataset.collapseTextActive;
    } else if (textToggler && state === "inactive") {
      textToggler.textContent = textToggler.dataset.collapseTextInactive;
    }
  });
}

function findClassToggler(target) {
  if (
    target.hasAttribute("data-collapse-class-active") ||
    target.hasAttribute("data-collapse-class-inactive")
  ) {
    return target;
  }

  return (
    target.closest("[data-collapse-class-active]") ||
    target.closest("[data-collapse-class-inactive]")
  );
}

function findTextToggler(target) {
  if (
    target.hasAttribute("data-collapse-text-active") ||
    target.hasAttribute("data-collapse-text-inactive")
  ) {
    return target;
  }

  return (
    target.querySelector("[data-collapse-text-active]") ||
    target.querySelector("[data-collapse-text-inactive]")
  );
}

function updateAllChildrenSwipers(event) {
  const swipers = event.target.querySelectorAll(".swiper");
  [...swipers].forEach(swiperElement => {
    swiperElement.swiper.update();
  });
}

(function() {
  document.addEventListener("show.bs.collapse", function(event) {
    const collapseInstance = Collapse.getOrCreateInstance(event.target);

    findAndProcessClassTogglersIfExists(
      collapseInstance._triggerArray,
      "active"
    );

    findAndProcessTextTogglersIfExists(
      collapseInstance._triggerArray,
      "active"
    );
  });

  document.addEventListener("shown.bs.collapse", updateAllChildrenSwipers);

  document.addEventListener("hide.bs.collapse", function(event) {
    const collapseInstance = Collapse.getOrCreateInstance(event.target);

    findAndProcessClassTogglersIfExists(
      collapseInstance._triggerArray,
      "inactive"
    );

    findAndProcessTextTogglersIfExists(
      collapseInstance._triggerArray,
      "inactive"
    );
  });
})();
