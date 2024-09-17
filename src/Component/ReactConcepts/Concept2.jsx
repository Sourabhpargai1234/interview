import React, {useState} from 'react'

function Panel({title, children, isActive, onShow}){
    
    return(
        <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow}>
            Show
          </button>
        )}
      </section>
    );
}

export default function Accordian() {
    const[activeIndex, setActiveIndex]=useState(0)
  return (
    <div>
        <h1>Accordian</h1>
        <Panel title="About" isActive={activeIndex===0} onShow={()=>setActiveIndex(0)}>
            This is about section of my website
        </Panel>
        <Panel title="Contact" isActive={activeIndex===1} onShow={()=>setActiveIndex(1)}>
            This is contact section of my website
        </Panel>
    </div>
  )
}
