export default class Api {
  baseAddres = `https://front-test.beta.aviasales.ru/`;

  getSearchId = async () => {
    const res = await fetch(`${this.baseAddres}search`);
    const result = await res.json();

    return result.searchId;
  };

  getTickets = async (id) => {
    const res = await fetch(`${this.baseAddres}tickets?searchId=${id}`).then((response) => {
      if (!response.ok) {
        throw new Error('ERROR: Ошибка при получении данных о билете!');
      }
      return response;
    });
    const result = await res.json();

    return result;
  };
}
