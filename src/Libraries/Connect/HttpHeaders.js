import is from 'is_js';

export default class HttpHeaders {
  constructor(builder) {
    this.header = {};

    if (is.not.undefined(builder.noCacheControl)) {
      this.header['Cache-Control'] = builder.noCacheControl;
    }

    if (is.not.undefined(builder.jsonContentType)) {
      this.header['Content-Type'] = builder.jsonContentType;
    }

    if (is.not.undefined(builder.jwtAuthorization)) {
      this.header.Authorization = builder.jwtAuthorization;
    }
  }

  getHeader() {
    return this.header;
  }

  static get Builder() {
    class Builder {
      setNoCacheControl() {
        this.noCacheControl = 'no-cache';
        return this;
      }

      setJsonContentType() {
        this.jsonContentType = 'application/json;charset=utf-8';
        return this;
      }

      setJwtAuthorization(val) {
        this.jwtAuthorization = `Bearer ${val}`;
        return this;
      }

      build() {
        return new HttpHeaders(this);
      }
    }

    return Builder;
  }
}
