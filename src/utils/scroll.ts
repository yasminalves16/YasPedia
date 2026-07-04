export const APP_SCROLL_CONTAINER_ID = "app-scroll-container";

function findSectionElement(id: string): HTMLElement | null {
  const scrollContainer = document.getElementById(APP_SCROLL_CONTAINER_ID);

  if (scrollContainer) {
    const inContainer = scrollContainer.querySelector<HTMLElement>(
      `[id="${CSS.escape(id)}"]`,
    );
    if (inContainer) return inContainer;
  }

  return document.getElementById(id);
}

export function scrollToSection(id: string) {
  const element = findSectionElement(id);
  if (!element) return;

  const scrollMargin =
    Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 32;

  const scrollContainer = document.getElementById(APP_SCROLL_CONTAINER_ID);

  if (scrollContainer) {
    const top =
      element.getBoundingClientRect().top -
      scrollContainer.getBoundingClientRect().top +
      scrollContainer.scrollTop -
      scrollMargin;

    scrollContainer.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
    return;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
