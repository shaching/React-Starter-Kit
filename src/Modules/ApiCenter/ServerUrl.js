import is from 'is_js';

export default class ServerUrl {
  constructor(builder) {
    if (is.not.undefined(builder.api)) {
      this.url = builder.api;
    }
  }

  getUrl() {
    return this.url;
  }

  static get Builder() {
    class Builder {
      setApi() {
        this.api = 'http://127.0.0.1:5000/';
        return this;
      }

      build() {
        return new ServerUrl(this);
      }
    }

    return Builder;
  }
}
