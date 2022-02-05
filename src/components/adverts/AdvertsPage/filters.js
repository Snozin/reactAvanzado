export const saleFilter = {
  all: { value: 'all', label: 'All' },
  sell: { value: 'sell', label: 'Sell' },
  buy: { value: 'buy', label: 'Buy' },
};

export const defaultFilters = {
  name: '',
  price: [],
  sale: saleFilter.all.value,
  tags: [],
};

// Individual filters are in form
// filterValue => advert => Boolean

const filterByName =
  filter =>
  ({ name }) => {
    const cleanFilter = filter.trim();
    return !cleanFilter || new RegExp(cleanFilter, 'gi').test(name);
  };

const filterByPrice =
  filter =>
  ({ price }) => {
    if (!filter.length) {
      return true;
    }
    const [min, max] = filter;
    if (!max) {
      return price >= min;
    }
    return price >= min && price <= max;
  };

const filterBySale =
  filter =>
  ({ sale }) =>
    [
      saleFilter.all.value,
      sale ? saleFilter.sell.value : saleFilter.buy.value,
    ].includes(filter);

// const filterBySale =
//   filter =>
//   ({ sale }) => {
//     if (filter === saleFilter.all.value) {
//       return true;
//     }
//     if (filter === saleFilter.sell.value) {
//       return sale;
//     }
//     if (filter === saleFilter.buy.value) {
//       return !sale;
//     }
//   };

const filterByTags =
  filter =>
  ({ tags }) =>
    !filter.length || filter.every(tag => tags.includes(tag));

// export const filterAdverts = (adverts, { name, price, sale, tags }) => {
//   const applyFilters = (...filters) =>
//     adverts.filter(advert => filters.every(filter => filter(advert)));

//   return applyFilters(
//     filterByName(name),
//     filterByPrice(price),
//     filterBySale(sale),
//     filterByTags(tags)
//   );
// };

export const filterAdverts = (adverts, { name, price, sale, tags }) =>
  // adverts.filter(
  //   advert =>
  //     filterByName(name)(advert) &&
  //     filterByPrice(price)(advert) &&
  //     filterBySale(sale)(advert) &&
  //     filterByTags(tags)(advert),
  // );
  adverts
    .filter(filterByName(name))
    .filter(filterByPrice(price))
    .filter(filterBySale(sale))
    .filter(filterByTags(tags));
