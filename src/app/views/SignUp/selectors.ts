import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';

export const selectDomain = (state: RootState) =>
  state?.user || initialState;

export const select = () => createSelector([selectDomain], state => state);

export default () => useSelector(select());