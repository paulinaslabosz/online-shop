import { atom } from 'recoil';

const products = atom({
  key: 'products',
  default: [],
});

const users = atom({
  key: 'users',
  default: [],
});

const posts = atom({
  key: 'posts',
  default: [],
});

const categories = atom({
  key: 'categories',
  default: [],
});

const cart = atom({
  key: 'cart',
  default: [],
});

const activeCart = atom({
  key: 'activeCart',
  default: false,
});

const discount = atom({
  key: 'discount',
  default: 0.25,
});

export { discount, activeCart, cart, categories, products, users, posts };
