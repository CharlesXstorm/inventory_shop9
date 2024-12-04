export const formatTooltip = () => {
  const toolTip = document.querySelectorAll(".tooltip");

  toolTip.forEach(function (tooltip) {
    const title = tooltip
      .getAttribute("data-title")
      ?.replace(/\\n/g, "\n") as string;
    tooltip.setAttribute("data-title", title);
  });
};
