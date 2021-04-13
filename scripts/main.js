// threshold for when the image appears: 25% or 0.25, low thresholds are good bc they let the user see the animation of the iamge appearing on screen
// need to handle when something starts to intersect, and when something ceases to intersect (when we show the image and when we hide the image)
// when something starts to intersect, you need to add the active class. when something ceases to intersect, you need to remove the active class. \
// the observer is observing the root node

let options = {
  root: null,
  threshold: 0.25,
};

function intersectionHandler(entries, observer) {
  // if it is intersecting
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // adds active if it is intersecting
      entry.target.classList.add("active");

      let color = entry.target.dataset.color;
      document.body.style.backgroundColor = color;
    } else {
      // removes active if it is no longer intersecting
      entry.target.classList.remove("active");
    }
  });
}

let observer = new IntersectionObserver(intersectionHandler, options);
// let is the same thing as creating a var

// need to get reference to all of the images
let images = document.querySelectorAll("img");

// loop through all the images, and tell the observer to observe each one
// for (let i = 0; i < images.length; i++) {}, this is the ugly way to do the same thing as below

images.forEach((image) => {
  observer.observe(image);
});
