const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api'

const li1 = document.querySelector('li:nth-child(1)')
const li2 = document.querySelector('li:nth-child(2)')

function mugshot(link) {
  let img = document.createElement("img")
  img.classList.add('mugshot')
  img.src = link

  li1.appendChild(img)
}

function createName(name, surname) {
  let h1 = document.createElement("h1")
  h1.textContent = name + ' ' + surname
  li2.appendChild(h1)
}

function gitImage(src) {
  let a = document.createElement("a")
  a.href = src

  let img = document.createElement("img")
  img.src = './img/github.svg'

  a.appendChild(img)

  li2.appendChild(a)
}

function sports(sports) {
  let p = document.createElement("p")
  p.textContent = 'Sports: ' + sports

  li2.appendChild(p)
}

function music(music) {
  let p = document.createElement("p")
  p.textContent = 'Music: ' + music

  li2.appendChild(p)
}

function workSpace(workspace){
  let p = document.createElement("p")
  p.textContent = 'Working space: ' + workspace

  li2.appendChild(p)
}

// GET REQUEST
const teams = fetch(url + `/squads/2/teams/6/members/4`)
  .then(response => response.json())
  .then(data => {
    mugshot(data.mugshot)
    createName(data.name, data.surname)
    gitImage(data.githubHandle)
    sports(data.other.sport)
    music(data.other.muziek)
    workSpace(data.other.werkplek)
  }
  )


// // PUT REQUEST
// const putData = {
//     id:4,
//     teamId:6,
//     name:'Guus',
//     surname:'Maij',
//     mugshot:'https://i.imgur.com/W6ni7nQ.jpg',
//     githubHandle:'https://github.com/tsjuusmei',
//     other: {
//         sport: 'Boxing',
//         muziek: 'Mac Miller',
//         werkplek: 'Home Desk'
//     }
// }

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'PUT',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// postData(url + `/squads/2/teams/6/members/4`, putData)
//     .then(data => {
//         console.log('put', data);
//     });