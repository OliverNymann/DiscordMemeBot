// Array of image links
const imageLinks = [
    'https://i.pinimg.com/236x/0b/fc/a8/0bfca8eca795a4b8f3c70c2c82660b66.jpg',
    'https://i.pinimg.com/474x/ee/05/48/ee054872761d9054bacf8c2c1e97ee73.jpg',
    'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yODI2NTY0MS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTc1MDEwMjA2OX0.guF88WHBVRGEU1_rd2aFOXuXNkYBXGpgMfHNHkwCa80/img.png?width=1200&height=800&quality=85&coordinates=0%2C14%2C0%2C26',
    // Add more image links as needed
  ];
  
  // Function to get a random image link
  export function getRandomImageLink() {
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    return imageLinks[randomIndex];
  }

  