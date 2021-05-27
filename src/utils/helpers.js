export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  // console.log(newNumber);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  // console.log(unique);
  return ['all', ...new Set(unique)];
};
