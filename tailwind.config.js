/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                Antonio: "Antonio",
                Spartan: "Spartan"
            }
        }
    },
    screens: {
        md: "768px",
        lg: "1200px"
    },
    plugins: []
};
