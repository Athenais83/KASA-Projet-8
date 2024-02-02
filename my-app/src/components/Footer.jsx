import React from "react"
import '../App'
import '../sass/_footer.scss'

function Footer(){
    return(
        <section className="footer">
            <img src="/assets/logo.png" alt='KASA' className="logofooter"/>
            <p className="mention">2020 Kasa. All rights reserved</p>
        </section>
    )
}

export default Footer