import React from "react"

import WedoIcon from "../../Icons/Wedoit"

const Wedo = () => {
  return (
    <div className="boxFull wedo">
      <div className=" box wedo-title">
        <h3 className="h3-title">We reparieren dein Handy</h3>
      </div>
      <div className="box wedo-content">
        <div className="col-12 col-md-6">
          <div className="wedo-problem">
            <ol>
              <li className="small-text">✅ Display Reparatur</li>
              <li className="small-text">✅ Fehlerdiagnose</li>
              <li className="small-text">✅ Kostenvoranschlag</li>
              <li className="small-text">✅ Wasserschaden Diagnose</li>
              <li className="small-text">✅ Backcover Reparatur</li>
              <li className="small-text">✅ Akku Austausch</li>
              <li className="small-text">✅ Hauptkamera Reparatur</li>
              <li className="small-text">✅ Kameraglasreparatur</li>
              <li className="small-text">✅ Powerbutton Reparatur</li>
              <li className="small-text">✅ Hörmuschel Reparatur</li>
              <li className="small-text">✅ Ladebuchse Reparatur</li>
              <li className="small-text">✅ Kopfhörerbuchse Reparatur</li>
              <li className="small-text">✅ Lautstärkeregler Reparatur</li>
            </ol>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="wedo-pic">
            <WedoIcon width="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wedo
