window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabList = document.querySelector('[role="tablist"]');

  tabs.forEach(tab => {
    tab.addEventListener("click", changeTabs);
  });
});

const changeTabs = (e) => {
  const target = e.target;
  const parent = document.querySelector(".tab-list");

  parent.querySelectorAll('[aria-selected="true"]').forEach(t => {
    t.setAttribute("aria-selected", false);
  });

  target.setAttribute("aria-selected", true);

  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabPanels.forEach(p => {
    p.setAttribute("hidden", true);
  });

  document.querySelector(`#${target.getAttribute("aria-controls")}`).removeAttribute("hidden");
};



