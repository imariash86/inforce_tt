import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';


export const ProductList: FC = () => {
  const products = useAppSelector(state => state.products);
  const { query, status } = useAppSelector(state => state.sort);

  let visibleProducts = [...products];

  if (query) {
    visibleProducts = visibleProducts.filter(product => product.title.toLowerCase().includes(query.trim().toLowerCase()));
  }

  if (status !== 'default') {
    visibleProducts = [...visibleProducts].sort((prodA, prodB) => {
      switch (status) {
        case 'name':
          return prodA.title.localeCompare(prodB.title);
        case 'price':
          return prodA.price - prodB.price;
        default:
          throw new Error('Wrong filter');
      }
    });
  }

  return (
    <div>
      {visibleProducts.map(product => {
        const { id, title, description, image, price } = product;

        return (
          <div key={id}>
            <img src={image} alt='product' width='100px'/>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <></>
          </div>
        );
      })}
    </div>
  );
};
