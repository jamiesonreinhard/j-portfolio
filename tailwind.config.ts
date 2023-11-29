import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',    // A nice blue
        secondary: '#f6ad55',  // A warm orange
        accent: '#9f7aea',     // A gentle purple
        neutral: '#f5f5f5',    // A soft off-white
        dark: '#2d3748',       // A deep blue-grey
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}
export default config
