const url = 'https://6017df5c971d850017a3f1ad.mockapi.io/minor-web/api/'

// GET REQUEST
const teams = fetch(`${url}/squads/6/teams/3/members/`)
                .then(response => response.json())
                .then(data => console.log('fetch', data));

// PUT REQUEST
const putData = {
    id:4,
    teamId:6,
    name:'Guus',
    prefix:'',
    surname:'Maij',
    mugshot:'',
    githubHandle:'https://github.com/tsjuusmei',
    other: {
        sport: 'Boxing',
        muziek: 'Mac Miller',
        werkplek: 'Home Desk'
    }
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
  
postData(`${url}/squads/2/teams/6/members/4`, putData)
    .then(data => {
        console.log('put', data);
    });