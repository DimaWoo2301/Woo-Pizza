import cheeseburger from '../assets/img/pizza/cheeseburger.jpg';
import cheeseChicken from '../assets/img/pizza/cheese-chicken.jpg';
import cheese from '../assets/img/pizza/cheese.jpg';
import asianShrimp from '../assets/img/pizza/asian-shrimp.jpg';
const initialState = {
  typesProduct: [
    {
      id: 1,
      name: 'Все',
    },
    {
      id: 2,
      name: 'Мясная',
    },
    {
      id: 3,
      name: 'Вегетарианская',
    },
    {
      id: 4,
      name: 'Гриль',
    },
    {
      id: 5,
      name: 'Острая',
    },
  ],
  product: [
    {
      id: 1,
      img: cheeseburger,
      name: 'Чизбургер-пицца',
      price: 395,
      typeProduct: 4,
      dough:
        {
          thin: true,
          traditional: false,
        },
      sizePizza:
        {
          small: true,
          medium: true,
          big: false,
        },
    },
    {
      id: 2,
      img: cheeseChicken,
      name: 'Сырный цыпленок',
      price: 400,
      typeProduct: 2,
      dough:
        {
          thin: true,
          traditional: true,
        },
      sizePizza:
        {
          small: true,
          medium: true,
          big: true,
        },
    },
    {
      id: 3,
      img: cheese,
      name: 'Сырная',
      price: 450,
      typeProduct: 3,
      dough:
        {
          thin: true,
          traditional: true,
        },
      sizePizza:
        {
          small: false,
          medium: true,
          big: true,
        },
    },
    {
      id: 4,
      img: asianShrimp,
      name: 'Креветки по азиатски',
      price: 499,
      typeProduct: 5,
      dough:
        {
          thin: false,
          traditional: true,
        },
      sizePizza:
        {
          small: false,
          medium: true,
          big: false,
        },
    },
    {
      id: 5,
      img: cheeseburger,
      name: 'Чизбургер-пицца',
      price: 395,
      typeProduct: 4,
      dough:
        {
          thin: true,
          traditional: false,
        },
      sizePizza:
        {
          small: true,
          medium: true,
          big: false,
        },
    },
    {
      id: 6,
      img: cheeseChicken,
      name: 'Сырный цыпленок',
      price: 400,
      typeProduct: 2,
      dough:
        {
          thin: true,
          traditional: true,
        },
      sizePizza:
        {
          small: true,
          medium: true,
          big: true,
        },
    },
    {
      id: 7,
      img: cheese,
      name: 'Сырная',
      price: 450,
      typeProduct: 3,
      dough:
        {
          thin: true,
          traditional: true,
        },
      sizePizza:
        {
          small: false,
          medium: true,
          big: true,
        },
    },
    {
      id: 8,
      img: asianShrimp,
      name: 'Креветки по азиатски',
      price: 499,
      typeProduct: 5,
      dough:
        {
          thin: false,
          traditional: true,
        },
      sizePizza:
        {
          small: false,
          medium: true,
          big: false,
        },
    },
  ],
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
