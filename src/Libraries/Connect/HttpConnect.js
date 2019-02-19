import axios from 'axios';
import is from 'is_js';

export default class HttpConnect {
  constructor(headers, baseUrl) {
    if (this.constructor === HttpConnect) {
      throw new TypeError('Can not new abstract class.');
    }
    this.headers = headers;
    this.baseUrl = baseUrl;
  }

  get(apiName) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      method: 'GET',
      headers: this.headers,
    };
    return this.call(config);
  }

  post(apiName, fromBody) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      method: 'POST',
      headers: this.headers,
      data: is.json(fromBody) ? JSON.stringify(fromBody) : fromBody,
    };
    return this.call(config);
  }

  put(apiName, fromBody) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      method: 'PUT',
      headers: this.headers,
      body: is.json(fromBody) ? JSON.stringify(fromBody) : fromBody,
    };
    return this.call(config);
  }

  delete(apiName) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      method: 'DELETE',
      headers: this.headers,
    };
    return this.call(config);
  }

  patch(apiName, fromBody) {
    const config = {
      url: `${this.baseUrl}${apiName}`,
      method: 'PATCH',
      headers: this.headers,
      body: is.json(fromBody) ? JSON.stringify(fromBody) : fromBody,
    };
    return this.call(config);
  }

  /* eslint-disable class-methods-use-this */
  call(config) {
    return axios(config);
  }
}
