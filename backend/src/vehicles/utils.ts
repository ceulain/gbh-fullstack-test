import { OrderBy, Sort } from './types';

export const getOrderBy = (sort: Sort) => {
  let orderParams: OrderBy;

  if (sort === 'price') {
    orderParams = {
      orderBy: [
        {
          price: 'desc',
        },
      ],
    };
  } else if (sort === 'year') {
    orderParams = {
      orderBy: [
        {
          year: 'desc',
        },
      ],
    };
  } else {
    orderParams = {};
  }

  return orderParams;
};
