export default class Api {
  baseAddres = `https://front-test.beta.aviasales.ru/`;

  getSearchId = async () => {
    const res = await fetch(`${this.baseAddres}search`);
    const result = await res.json();

    return result.searchId;
  };

  getTickets = async () => {
    const searchId = await this.getSearchId();
    const res = await fetch(`${this.baseAddres}tickets?searchId=${searchId}`).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    });
    const result = await res.json();

    return result.tickets;
  };
}
