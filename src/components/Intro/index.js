import React from "react"
import Termin from "../Termin"

const Intro = () => {
  return (
    <div className="boxFull intro">
      <div className="boxFull intro-wrap">
        <div className="box boxFlex intro-content">
          <div className="col-12 col-md-7 col-lg-8 intro-content__text">
            <div className="intro-content__text-inner">
              <h1 className="h1-title">Handy und Tablet Werkstatt</h1>
              <p>
                Wir führen für Smartphones, Tablets und Notebooks aller
                namhaften Marken sämtliche Reparaturen professionell und
                preiswert durch und gewähren Ihnen eine 1-Jahres-Garantie auf
                unsere Leistungen.
              </p>
              <div className="boxFlex cta-btn">
                <button className="btn btn-bg">Services</button>
                <button className="btn">How it work</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 intro-content__termin">
            <Termin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
