import { v4 as uuid4 } from "uuid";

const read = (key) => {
  const data = localStorage.getItem(key);
  if (null === data) {
    return [];
  } else JSON.parse(data);
};

const write = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const lsCreate = (key, data) => {
  const ls = read(key);
  ls.push({ ...data, id: uuid4() });
  write(key, ls);
};

export const lsDelete = (key, id) => {
  const ls = read(key);
  write(
    key,
    ls.filter((d) => d.id !== id)
  );
};

export const lsEdit = (key, data, id) => {
  const ls = read(key);
  write(
    key,
    ls.map((d) => (d.id === id ? { ...d, ...data, id } : d))
  );
};

export const lsRead = key => {
    return read(key);
}

export const show = (key, id ) => {
    const ls = read(key);
    return ls.find(d => d.id === id)
}