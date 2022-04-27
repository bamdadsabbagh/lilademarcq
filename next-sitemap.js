/* eslint-disable jsdoc/valid-types */
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.lilademarcq.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
