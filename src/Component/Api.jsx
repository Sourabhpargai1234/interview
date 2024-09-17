import React from 'react'

export default function Api() {
    const api={
        first:{
            name:"son",
            occupation:"hasana"
        },
        second:{
            name:"father",
            occupation:"chillana"
        },
        third:{
            name:"brother",
            occupation:"hasna"
        }
    }
    const array=Object.values(api)
  return (
    <div>
        {array.map((item, index) => (
          <React.Fragment key={index}>
            <ul>
                <li>{item.name}</li>
                <li>{item.occupation}</li>
            </ul>
          </React.Fragment>
        ))}
    </div>
  )
}
