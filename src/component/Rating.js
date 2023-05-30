import React from 'react'

export default function Star({smiley, star }) {
    const range = [1,2,3,4,5]


return (
    <div>
        {range.map((element)=>
            star >= element ? <span key={element.toString()}>⭐</span> : null )}

    </div>
)

}