import fetch from 'node-fetch'; 

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const body = await response.text(); 
    
    console.log('Google Homepage HTML:\n');
    console.log(body);
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogleHomePage();
