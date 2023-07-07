/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins, sans-serif"],
                inter: ["Inter, sans-serif"],
            },
            fontSize: {
                "3.5xl": "2rem",
            },
            spacing: {
                "76px": "4.75rem",
                "55px": "3.43rem",
                "30px": "1.875rem",
            },
            colors: {
                "light-black": "#ffffffa",
                background: "#888888",
                violet: "#452CDD",
            },
            borderWidth: {
                "16px": "1rem",
            },
        },
    },
    plugins: [],
};
