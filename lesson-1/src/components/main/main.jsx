import "./main.css"
import Cards from "../../utils/mook"
import React, { useState } from "react"

const Main = () => {
    const [data, setdata] = useState(Cards)
    return <>
        <main>
            <section>
                <h1>
                    We are your MateDesigners
                </h1>
                <div className="container">
                    {
                        data.map((v) => (
                            <div className="ca" key={v.id}>
                                <img src={v.img} alt="" />
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                            </div>
                        ))
                    }
                </div>

            </section>
        </main>
    </>
}

export default Main