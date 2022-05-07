import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const product = useSelector((state) => state.shop.product);
  const [qwe, setQwe] =useState(1)
  const onClickX = () => {
    setQwe(qwe+1)
  }
  return (
    <div className="content__items">
      {product.map((el) =>
        <div key={el.name} className="pizza-block">
          <img
            className="pizza-block__image"
            src={el.img}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{el.name}</h4>
          <div className="pizza-block__selector">
            <ul>
              <li className={!el.dough.thin ? "pizza-block__check": ''}>Тонкое</li>
              <li className={!el.dough.traditional ? "pizza-block__check": ''}>Традиционное</li>
            </ul>
            <ul>
              <li className={!el.sizePizza.small ? "pizza-block__check": ''}>26 см.
              </li>
              <li className={!el.sizePizza.medium ? "pizza-block__check": ''}>30 см.</li>
              <li className={!el.sizePizza.big ? "pizza-block__check": ''}>40 см.</li>
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {el.price} ₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373
                         0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373
                          0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627
                           5.3373 12 6 12C6.6627 12 7.2 11.4627
                             7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12
                             5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span onClick={onClickX}>Добавить</span>
              <i>{qwe}</i>
            </div>
          </div>
        </div>,
      )}
    </div>
  );
};

export default Products;
