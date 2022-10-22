import data from '../../data/initData.json';
import { reducer, setUsers } from './users';

describe('userReducer', () => {
  test('should change state', () => {
    expect(reducer({ list: data }, setUsers(data))).toEqual({
      list: data,
    });
  });
});
