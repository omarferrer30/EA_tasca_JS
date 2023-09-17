async function requestUSERs() {
    // HTTP Request to TODO API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok)
      throw new Error(`HTTP Error (${response.status})`)
    // HTTP Response to JSON
    const json = await response.json();
    return json;
  }

  requestUSERs().then( json => {
    // JSON process
    console.log(json)
    // Filter by completed
    const oddIDs_inverse_sorted = json.filter( user => user.id % 2 != 0 )
    .sort((a,b) => b.id - a.id)
    .map(user => user.name);
    console.log(oddIDs_inverse_sorted)
  })
