// It's a beautiful day, and you've decided to take your solar - powered rover out for a tour of the Martian landscape.

// From the Hellas impact basin to the Elysium volcanic province, there's quite a variety of terrain on Mars, so each kilometre of your trip may cost a different amount of solar energy to travel through.

// Given an array terrainDifficulty, representing the energy cost for each kilometre of the trip, you'd like to find the longest strip of land you can travel across with your current energy. Return the length of this trip (in kilometres).

// For terrainDifficulty = [3, 5, 4, 2, 3, 1, 5, 3, 4] and energy = 11, the output should be roverTour(terrainDifficulty, energy) = 4.

// The longest stretch of terrain you can cover is over the interval from index 2 to index 5(4 + 2 + 3 + 1 = 10, which is less than energy).


function roverTour(terrainDifficulty, energy) {
    let count;
    let sum = 0;
    let pointer = 0;
    for (let i = 0; i < terrainDifficulty.length; i++) {
        sum += terrainDifficulty[i];
        if (sum > energy) {
            while (sum > energy) {
                sum = sum - terrainDifficulty[pointer];
                pointer++;
            }
        }
        count = count > i - pointer + 1 ? count : i - pointer + 1;
    }
    return count;
}