/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            screens: {
                xs: '420px',
                xxl: '1440px',
                xxxl: '1660px',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                hevelta: ['Hevelta', 'sans-serif'],
            },
            colors: {
                background1: 'white',
                background2: '#232f3e',
                background3: '#161619',
            },
        },
    },
    plugins: [],
}
