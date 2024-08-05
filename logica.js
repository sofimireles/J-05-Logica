const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// First, ask for the username
rl.question("Ingresa tu usuario: ", (username) => {
    // Then, ask for the age
    rl.question("Ingresa tu edad: ", (age) => {
        // Finally, ask for the favorite movies
        rl.question("Ingresa tus 3 peliculas favoritas: ", (favoriteMovies) => {
            // Convert the string of movies into an array
            const moviesArray = favoriteMovies.split(",");

            // Display the stored information in the console
            console.log(`\nUsuario: ${username}`);
            console.log(`Edad: ${age}`);
            console.log("Pelicula favorita:");

            moviesArray.forEach((film, index) => {
              if (index === 0) {
                  console.log(`La pelicula ${film.trim()} es una de mis favoritas.`);
              } else {}
          });

            // Close the readline interface
            rl.close();
        });
    });
});