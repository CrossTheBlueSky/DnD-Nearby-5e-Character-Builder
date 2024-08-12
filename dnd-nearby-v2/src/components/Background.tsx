import React from 'react'

export default function Background() {
    return (<>
    
    <div className="w-full h-full">
        <div className="background-form">
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="description">Background</label>
                <select></select>
            </form>
            </div>
        </div>


    </div>
    </>

    )
}