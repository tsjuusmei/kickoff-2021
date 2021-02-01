# Minor Web Design & Development Kickoff 2021

In this repository I created a small visit card for my new classmates to get to know each other better.

[Live demo here](https://visitcardguus.netlify.app/)

![Visit card](https://i.imgur.com/kEVxXI3.jpeg)

## Information

I started off pushing some personal data to an API, so I could use vanilla JavaScript to show this data on my visit card.
This code is commented out, but can be seen [here](https://github.com/tsjuusmei/kickoff-2021/blob/main/js/app.js#L67-L96)

Once I put my information in the API, I could start writing code to create my visit card.

## Breakdown

I created a breakdown of my visit card. It looks a little different than the actual outcome, but it is very similar code-wise:

![Breakdown](https://i.imgur.com/hDBaXzK.jpeg)

## JavaScript

I started implementing the data with JavaScript. For this I created functions which appends elements to the pre-made elements within the HTML file. First I fetch the data like this: 

```js
const teams = fetch(url + `/squads/2/teams/6/members/4`)
  .then(response => response.json())
```

Then, for example, in this function I created and appended my name with the data:

```js
function createName(name, surname) {
  let h1 = document.createElement("h1")
  h1.textContent = name + ' ' + surname
  li2.appendChild(h1)
}
```

After this I could use a `.then` to use the functions and append the elements:

```js
  .then(data => {
    mugshot(data.mugshot)
    createName(data.name, data.surname)
    gitImage(data.githubHandle)
    sports(data.other.sport)
    music(data.other.muziek)
    workSpace(data.other.werkplek)
  }
```

See the full file [here](https://github.com/tsjuusmei/kickoff-2021/blob/main/js/app.js)

## Assignment

[Full assignment](https://cmda-minor-web.github.io/kickoff-2021/)


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
