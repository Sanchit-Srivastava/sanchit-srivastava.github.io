(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("#theme-toggle");

  if (!toggle) return;

  const preferredTheme = () => {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const updateLabel = () => {
    const current = preferredTheme();
    const next = current === "dark" ? "light" : "dark";
    const label = toggle.querySelector("span");
    if (label) label.textContent = next;
    toggle.setAttribute("aria-label", `Switch to ${next} theme`);
    toggle.title = `Switch to ${next} theme`;
  };

  toggle.addEventListener("click", () => {
    const next = preferredTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
    updateLabel();
  });

  updateLabel();
})();
