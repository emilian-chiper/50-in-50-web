'use strict';

window.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.panel');

  panels.forEach((panel) =>
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.toggle('active');
    })
  );

  const removeActiveClasses = function () {
    panels.forEach((panel) => {
      panel.classList.remove('active');
    });
  };
});
