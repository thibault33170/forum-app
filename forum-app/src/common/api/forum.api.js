import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

function createQueryString(obj) {
  const params = new URLSearchParams("");
  for (let key in obj) {
    params.append(key, obj[key]);
  }
  return params.toString();
}

class JsonApi {
  constructor(name) {
    this.name = name;
  }

  getAll(filters) {
    return http.get(`/${this.name}?${createQueryString(filters)}`);
  }

  getOne(id) {
    return http.get(`/${this.name}/${id}`);
  }

  create(payload) {}

  delete(id) {}
}

export const Category = new JsonApi("categories");
export const Forum = new JsonApi("forums");
export const Topic = new JsonApi("topics");
export const Answer = new JsonApi("answers");
