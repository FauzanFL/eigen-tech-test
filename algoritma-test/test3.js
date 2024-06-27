const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const find = (input, query) => {
  return query.map((q) => input.filter((i) => i.includes(q)).length);
};

console.log(find(INPUT, QUERY));
