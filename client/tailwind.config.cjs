/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				customViolet: '#2463EB',
				royalBlue: {
					DEFAULT: '#2463EB',
					50: '#CCDBFA',
					100: '#BACEF9',
					200: '#94B3F5',
					300: '#6F98F2',
					400: '#497EEE',
					500: '#2463EB',
					600: '#124BC5',
					700: '#0D3792',
					800: '#09245E',
					900: '#04102B',
				},
			},
			fontFamily: {
				roboto: "'Roboto', sans-serif",
			}, 
      
      screens : {
        'tablet': '400px'
      },
			
      backgroundImage:{
        'gradient': "url(images/background/gradient.png)"
      }
		},
	},
	plugins: [],
};
