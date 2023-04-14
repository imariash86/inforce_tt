import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './api';
import './App.scss';
import { ProductList } from './components/ProductList/ProductList';
import { actions } from './features/products';
import { ProductSort } from './components/ProductSort/ProductSort';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const products = async () => {
      const data = await getProducts();

      console.log(data)

      dispatch(actions.set(data));
    };

    products();
  }, [dispatch]);

  return (
    <div className="App">
      <ProductSort />
      <ProductList />
    </div>
  );
}
