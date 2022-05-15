import http from "../http-common";

class fizzinfo {
  getAll() {
    return http.get("/fizzinfo");
  }
  get(ids) {
    return http.get(`/fizzinfo/${ids}`);
  }
}
export default new fizzinfo();
