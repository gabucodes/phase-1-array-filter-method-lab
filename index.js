function findMatching(drivers, searchString) {
const lowerSearchString = searchString.toLowerCase()
return drivers.filter(driver => driver.toLowerCase().includes(lowerSearchString)
)
}

function fuzzyMatch(drivers, searchString) {
    // Convert the search string to lowercase for case-insensitive comparison
    const lowerSearchString = searchString.toLowerCase();

    // Filter the drivers array
    return drivers.filter(driver => 
        driver.toLowerCase().startsWith(lowerSearchString)
    );
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }