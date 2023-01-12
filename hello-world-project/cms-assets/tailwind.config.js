const componentsDir = new URL('./components', import.meta.url).pathname;

export default {
  content: [
    `${componentsDir}/partials/**/*.{js,ts,jsx,tsx}`,
    `${componentsDir}/modules/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
