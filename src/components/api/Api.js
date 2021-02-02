export default class Api {
  baseAddres = `https://front-test.beta.aviasales.ru/`;

  async getSearchId() {
    const res = await fetch(`${this.baseAddres}search`);
    const result = await res.json();
    console.log(result);
    return result.searchId;
  }

  async getTickets() {
    const searchId = await this.getSearchId();
    const res = await fetch(`${this.baseAddres}tickets?searchId=${searchId}`);
    const result = await res.json();
    console.log(result.tickets);
    return result.tickets;
  }
}
