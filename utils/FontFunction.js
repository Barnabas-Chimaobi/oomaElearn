import * as Font from 'expo-font';

// Load the custom fonts
async function loadFonts() {
  await Font.loadAsync({
    'PoppinsRegular': require('../assets/Fonts/Poppins Regular 400.ttf'),
    // Add more fonts if needed
  });
}

// Call the function to load the fonts
loadFonts();
