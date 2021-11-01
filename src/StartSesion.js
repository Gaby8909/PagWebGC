import React from "react"
import "./startSesion.css"
import Typical from 'react-typical'

export const StartSession = () => {
    return (
        <div className="typical">
            <p className="textintropage"> {' '}

                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Gaby Campoverde',
                        1000,
                        'Junior Full Stack  Developer',
                        1000,
                        '',
                        1000,
                        '',
                        1000,

                    ]}
                />
            </p>
        </div>


    )
}