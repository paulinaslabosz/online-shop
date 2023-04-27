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

const adminPermission = atom({
  key: 'adminPermission',
  default: false,
});

const userName = atom({
  key: 'userName',
  default: '',
});
const userPassword = atom({
  key: 'userPassword',
  default: '',
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

const total = atom({
  key: 'total',
  default: [],
});
export {
  discount,
  total,
  activeCart,
  cart,
  categories,
  products,
  users,
  posts,
  adminPermission,
  userName,
  userPassword,
};
