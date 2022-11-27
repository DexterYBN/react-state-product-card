import { useState } from 'react';
import sneagers from './images/arko.jpg'
import './styles.css'

function App() {

  const [detal, setDetal] = useState(false)

  const [basket, setBasket] = useState(false)

  const handleGetText = (e) => {
    e.preventDefault()
    setDetal(!detal)
  }

  const handleGetBasket = (e) => {
    e.preventDefault()
    setBasket(!basket)
  }

  const handleDeleteInBasket = (e) => {
    setBasket(!basket)
  }

  const handleXButton = (e) => {
    setDetal(!detal)
  }

  return (
    <>
      <div className="App">
        <div className="header">
          <img src={sneagers} alt="sneakers" />
        </div>
        <div className="center">
          <div className="price">
            <div className="text">Nike Sneaker</div>
            <div className="dollar">$120</div>
          </div>
          <div className="btn">
            <button
              type="checkbox"
              value={detal}
              onClick={handleGetText}
              className="btnButton"
            >
              Дитиелс
            </button>
          </div>
        </div>
        <div className="detal">
          {detal && (
            <div className="textP">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <button className="x" onClick={handleXButton}>×</button>
            </div>
          )}
        </div>
        <div>
          <hr className="line"></hr>
        </div>
        <div className="description">
          <p className="descriptionText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <div className="basket">
            <button onClick={handleGetBasket} disabled={basket} className="basketText">
              {basket === false ? "Добавить в корзину" : "уже в корзине"}
            </button>
            <div className="basketClickText">
              {basket && <button onClick={handleDeleteInBasket}><a href='/'>Удалить из корзины</a></button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;