import React from "react"

import ServiceIcon from "../../Icons/Service"
import TerminIcon from "../../Icons/Termin"
import ShippedIcon from "../../Icons/Shipped"
import DataIcon from "../../Icons/DatabaseStorage"
import useGatsbyStripeData from "../hooks/useGatsbyStripeData"
import RelateProduct from "../Products/RelateProduct"

const Services = () => {
  const data = useGatsbyStripeData()
  return (
    <div className="boxFull services wrap-page">
      <div className="box services-wrap">
        <div className="box services-items">
          <div className="col-12 col-md-6">
            <div className="box">
              <h1 className="h3-title">
                <span className="service-icon">
                  <ServiceIcon width="3rem" height="3rem" />
                </span>
                <span className="service-title__text"> Schnelle Reparatur</span>
              </h1>
              <p className="small-text">
                Professionelle Tablet und Handy Reparatur innerhalb von 24 – 48
                Stunden. Für viele Geräte und Reparaturen steht auch die 24h
                Express Reparatur zur Auswahl. Bei Wasserschaden,
                Kostenvoranschlag und Diagnose kann sich die Reparaturdauer
                verzögern.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="box">
              <h1 className="h3-title">
                <span className="service-icon">
                  <DataIcon width="3rem" height="3rem" />
                </span>
                <span className="service-title__text">
                  Daten bleiben erhalten
                </span>
              </h1>
              <p className="small-text">
                Fotos, Videos, Apps und Nachrichten bleiben gespeichert. Extra
                Datensicherung auf separatem Medium zusätzlich verfügbar. Auch
                Datenrettung wird angeboten.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="box">
              <h1 className="h3-title">
                <span className="service-icon">
                  <ShippedIcon width="3rem" height="3rem" />
                </span>
                <span className="service-title__text"> Kostenlose versand</span>
              </h1>
              <p className="small-text">
                Ab 90€ kostenloser, versicherter Versand in Deutschland &
                Österreich mit DHL in beide Richtungen.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="box">
              <h1 className="h3-title">
                <span className="service-icon">
                  <TerminIcon width="3rem" height="3rem" />
                </span>
                <span className="service-title__text">
                  {" "}
                  Mit oder keine Termin
                </span>
              </h1>
              <p className="small-text">
                Keine Terminvereinbarung: Kommen Sie einfach während unserer
                Öffnungszeiten vorbei
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
