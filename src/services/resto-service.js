export default class responsetoService {
  _apiBase = "http://localhost:3000";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error("Server Error");
    }
    return await res.json();
  };

  async getMenuItems() {
    return await this.getResource("/menu");
  }
}

// // перый вариант
// export default class responsetoService {
//   url = " http://localhost:3000/menu";

//   getMenuItems = async () => {
//     const response = await fetch(this.url);

//     if (!response.ok) {
//       throw new Error("Server Error");
//     }
//     const result = await response.json();
//     return result;
//   };
// }
