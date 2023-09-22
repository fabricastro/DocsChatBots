/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#fff"
      }
    },
  },
  plugins:[
    nextui(), require('flowbite/plugin')
  ],
};

