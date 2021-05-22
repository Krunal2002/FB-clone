import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/20531316728/posts/10154009990506729/"
                width="340"
                height="100%"
                style={{border: "none", overflow: "hidden"}}
                scrolling="none"
                frameborder="0"
                allowTransparency="true"
                allow="encypted-media"
            ></iframe>
       </div>
    )
}

export default Widgets 
