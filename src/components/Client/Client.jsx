import './Client.css'
import img from "./client.png"
import images from "./quote.png"
export default function Client() {
  return (
    <>
    <div className="container">
        <div className="hero__title">
          <div className="hero__title-text">
            <h2>What our client say</h2>
          </div>
          <div className="hero__title-container">
          <div className="hero__title-img">
            <img src={img} alt="nigeru" />
          </div>
          <div className="hero__title-p">
            <div className="hero__title-p__img">
              <img src={images} alt="vergul" />
            </div>
            <div className="hero__title-p__text">
            <p>Amet in elementum nulla scelerisque dui, egestas <br /> at. Elit consectetur turpis elementum amet vitae et <br /> etiam nec. Varius volutpat hac adipiscing tincidunt <br /> pretium.</p>
            <h2>Angel Paulina</h2>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}
