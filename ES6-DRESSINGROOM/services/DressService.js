class DressService {
  fetchDressNav() {
    return axios({
      url: "https://60dd7e54878c890017fa2905.mockapi.io/dressNav",
      method: "GET",
    });
  }
  fetchDressTab() {
    return axios({
      url: "https://60dd7e54878c890017fa2905.mockapi.io/dressTabs",
      method: "GET",
    });
  }
  fetchDressTabID(id) {
    return axios({
      url: `https://60dd7e54878c890017fa2905.mockapi.io/dressTabs/${id}`,
      method: "GET",
    });
  }
}
export default DressService;
