import React from 'react'

function Home({id, name, age, nationality}) {
  return (
    <div>
        <p>
        {id}. My name is {name} I am {age} years old and I am {nationality}
        </p>
    </div>
  )
}

export default Home