class ApiService {
  _apiBase = 'https://api.github.com';

  getData = async (url, options = {}) => {
    const res = await fetch(`${this._apiBase}${url}`, options);

    if (!res.ok) {
      return Promise.reject(res);
    }

    return await res.json();
  };

  _createQuery = (page, name, license) => {
    return `?q=${name ? `${name}+in:name+` : ''}${
      license ? `+license:${license}+` : ''
    }language:javascript&sort=stars&order=desc&per_page=10&page=${page}`;
  };

  getReposList = async (page, name, license) => {
    const query = this._createQuery(page, name, license);

    return await this.getData(`/search/repositories${query}`);
  };
}

export default new ApiService();
