console.log('Advanced debugging example running.');
debugger;

// first, define the function.
function goodPractices() {
  const game = gameObject();
  for (const gameKey in game) {
    // Use debugger to check the value of 'gameKey'
    debugger;
    const teamObj = game[gameKey];
    for (const teamKey in teamObj) {
      // Use debugger to check the value of 'teamKey'
      debugger;

      // 'data' should be an object representing player stats, not a player's name
      // Use debugger to investigate
      const data = teamObj.players;
      for (const playerName in data) {
        // Use debugger to check each player's stats
        debugger;
      }
    }
  }
}

// Call the function to run it
goodPractices();
