/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html",
  ],

  theme: {
    
    screens: {
      sm: '320px',
      md: '600px',
      lg: '1136px',
      xl: '1440px',
    },
    
    extend: {
      colors:{
        'Primary-50': '#FFECE5',
        'Primary-75': '#FCD2C2',
        "Primary-100": '#FCB59A',
        "Primary-200": "#FA9874",
        "Primary-300": "#F77A4A",
        "Primary-400": "#F56630",
        "Primary-500": "#EB5017",
        "Primary-600": "#CC400C",
        "Primary-700": "#AD3307",
        "Primary-800": "#8F2802",
        "Primary-900": "#711E00",
  
        // Secondary
        "Secondary-50": "#E3EFFC",
        "Secondary-75": "#C6DDF7",
        "Secondary-100": "#B6D8FF",
        "Secondary-200": "#80BBFF",
        "Secondary-300": "#3D89DF",
        "Secondary-400": "#1671D9",
        "Secondary-500": "#0D5EBA",
        "Secondary-600": "#034592",
        "Secondary-700": "#04326B",
        "Secondary-800": "#012657",
        "Secondary-900": "#001633",
  
        // Success
        "Success-50": "#E7F6EC",
        "Success-75": "#B5E3C4",
        "Success-100": "#91D6A8",
        "Success-200": "#5FC381",
        "Success-300": "#40B869",
        "Success-400": "#0F973D",
        "Success-500": "#099137",
        "Success-600": "#04802E",
        "Success-700": "#036B26",
        "Success-800": "#015B20",
        "Success-900": "#04172B",
  
        // Warning
        "Warning-50": "#FEF6E7",
        "Warning-75": "#FBE2B7",
        "Warning-100": "#F7D394",
        "Warning-200": "#F7C164",
        "Warning-300": "#F5B546",
        "Warning-400": "#F3A218",
        "Warning-500": "#DD900D",
        "Warning-600": "#AD6F07",
        "Warning-700": "#865503",
        "Warning-800": "#664101",
        "Warning-900": "#523300",
  
         // Error
         "Error-50": "#FBEAE9",
         "Error-75": "#F2BCBA",
         "Error-100": "#EB9B98",
         "Error-200": "#E26E6A",
         "Error-300": "#DD524D",
         "Error-400": "#D42620",
         "Error-500": "#CB1A14",
         "Error-600": "#BA110B",
         "Error-700": "#9E0A05",
         "Error-800": "#800501",
         "Error-900": "#591000",
  
          // Neutral
          "Neutral-50": "#F9FAFB",
          "Neutral-75": "#F7F9FC",
          "Neutral-100": "#F0F2F5",
          "Neutral-200": "#E4E7EC",
          "Neutral-300": "#D0D5DD",
          "Neutral-400": "#98A2B3",
          "Neutral-500": "#667185",
          "Neutral-600": "#475367",
          "Neutral-700": "#344054",
          "Neutral-800": "#1D2739",
          "Neutral-900": "#101928",
  
           // Brown
           "Brown-50": "#FBF1F1",
           "Brown-75": "#F0E6E6",
           "Brown-100": "#E4DBDB",
           "Brown-200": "#CDC4C4",
           "Brown-300": "#B7AFAF",
           "Brown-400": "#A29999",
           "Brown-500": "#8D8484",
           "Brown-600": "#787070",
           "Brown-700": "#645D5D",
           "Brown-800": "#514A4A",
           "Brown-900": "#3E3838",
      },
      
    },
  },
  plugins: [],
}

