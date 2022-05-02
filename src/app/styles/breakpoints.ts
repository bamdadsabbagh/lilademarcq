const getAbove = (v) => `@media screen and (min-width: ${v}px)`;

const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  widescreen: 1200,
  fullhd: 1400,
};

export const mediaQueries = {
  above: {
    mobile: getAbove(breakpoints.mobile),
    tablet: getAbove(breakpoints.tablet),
    desktop: getAbove(breakpoints.desktop),
    widescreen: getAbove(breakpoints.widescreen),
    fullhd: getAbove(breakpoints.fullhd),
  },
};
