const getBelow = (v) => `@media screen and (max-width: ${v}px)`;
const getAbove = (v) => `@media screen and (min-width: ${v}px)`;

const breakpoints = {
  mobile: 767,
  tablet: 768,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
};

export const mediaQueries = {
  below: {
    mobile: getBelow(breakpoints.mobile),
  },
  above: {
    tablet: getAbove(breakpoints.tablet),
    desktop: getAbove(breakpoints.desktop),
    widescreen: getAbove(breakpoints.widescreen),
    fullhd: getAbove(breakpoints.fullhd),
  },
};
