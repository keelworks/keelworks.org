/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_home: "url('./images/banners-pages/home/hero-home.webP')",
        hero_about: "url('./images/banners-pages/about/hero-about.webP')",
        hero_team: "url('./images/banners-pages/team/hero-team.webP')",
        hero_opportunity:
          "url('./images/banners-pages/opportunity/hero-opportunity.webP')",
        hero_faq: "url('./images/banners-pages/faq/hero-faq.webP')",
        hero_get_involved:
          "url('./images/banners-pages/get-involved/hero-getInvolved.webP')",
        hero_contact: "url('./images/banners-pages/contact/hero-contact.webP')",
        lines_transparent:
          "url('./images/banners-pages/faq/bg-lines-transparent.webP')",
        profile: "url(./images/profiles/team-page/bg-profile.webP)",
        hero_about_bottom:
          "url('./images/banners-pages/about/hero-about-bottom.webP')",
      },
    },
  },
  plugins: [],
};
