const fetch = require('node-fetch')

const database = { "posts": [] }

async function generateData() {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  try {
    const response = await fetch(url)
    const posts = await response.json()

    database.posts.push(posts)
    console.log(JSON.stringify(database))

  } catch (e) {
    console.error(e.message)
  }
}

generateData();
