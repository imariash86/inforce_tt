import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { actions as sortActions } from '../../features/sort';
import { Status } from '../../types';

export const ProductSort: React.FC = () => {
  const { query, status } = useAppSelector(state => state.sort);
  const dispatch = useDispatch();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Status;

    dispatch(sortActions.setStatus(value));
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(sortActions.setQuery(event.target.value));
  };

  return (
    <form onSubmit={event => event.preventDefault()}>
      <select
        value={status}
        onChange={handleSelect}
      >
        <option value="default">Default</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      <input
        type="text"
        value={query}
        onChange={handleInput}
      />
    </form>
  );
};
