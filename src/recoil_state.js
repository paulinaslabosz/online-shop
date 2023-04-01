import { atom } from 'recoil';

const products = atom({
  key: 'products',
  default: [],
});

const users = atom({
  key: 'atoms',
  default: [],
});

const posts = atom({
  key: 'posts',
  default: [],
});
export { products, users, posts };
