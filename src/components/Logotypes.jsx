import React from 'react'
import Logotype1 from '../assets/imgs/logotypes/logoipsum-1.svg'
import Logotype2 from '../assets/imgs/logotypes/logoipsum-2.svg'
import Logotype3 from '../assets/imgs/logotypes/logoipsum-3.svg'
import Logotype4 from '../assets/imgs/logotypes/logoipsum-4.svg'
import Logotype5 from '../assets/imgs/logotypes/logoipsum-5.svg'
import Logotype6 from '../assets/imgs/logotypes/logoipsum-6.svg'

const Logotypes = () => {
  return (
<section id="logotypes">
        <div className="container logo-gap">
            <div className="logotypes">
                <img src={Logotype1} alt="Brand 1." />
            </div>
            <div className="logotypes">
                <img src={Logotype2} alt="Brand 2." />
            </div>
            <div className="logotypes">
                <img src={Logotype3} alt="Brand 3." />
            </div>
            <div className="logotypes">
                <img src={Logotype4} alt="Brand 4." />
            </div>
            <div className="logotypes logo-5">
                <img src={Logotype5} alt="Brand 5." />
            </div>
            <div className="logotypes logo-6">
                <img src={Logotype6} alt="Brand 6." />
            </div>
        </div>
    </section>
  )
}

export default Logotypes
