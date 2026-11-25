const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/200';

export const mockUser = { 
  id: 1, 
  name: 'Иван Иванов', 
  email: 'ivan@example.com',
};

export const mockProducts = [
  { id: 1, name: 'iPhone 14', price: 799, category: 'phones', image: PLACEHOLDER_IMAGE, description: 'Новейший iPhone' },
  { id: 2, name: 'Samsung Galaxy S23', price: 699, category: 'phones', image: PLACEHOLDER_IMAGE, description: 'Флагман Samsung' },
  { id: 3, name: 'MacBook Pro', price: 1999, category: 'laptops', image: PLACEHOLDER_IMAGE, description: 'Мощный ноутбук Apple' },
  { id: 4, name: 'Dell XPS 13', price: 1299, category: 'laptops', image: PLACEHOLDER_IMAGE, description: 'Премиум ноутбук Dell' },
  { id: 5, name: 'iPad Air', price: 599, category: 'tablets', image: PLACEHOLDER_IMAGE, description: 'Планшет Apple' },
  { id: 6, name: 'Samsung Galaxy Tab', price: 399, category: 'tablets', image: PLACEHOLDER_IMAGE, description: 'Планшет Samsung' },
];
