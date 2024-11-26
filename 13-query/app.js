const userSearch = {
  search: "Вася",
  take: 10,
  by: "example",
};

function getQuery(query) {
  const res = [];
  for (let key in query) {
    res.push(`${key}=${query[key]}`);
  }
  return `//${res.join("&")}`;
}

console.log(getQuery(userSearch));
