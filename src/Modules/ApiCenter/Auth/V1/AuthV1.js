import HttpConnect from '@/Libraries/Connect/HttpConnect';
import HttpHeaders from '@/Libraries/Connect/HttpHeaders';
import ServerUrl from '@/Modules/ApiCenter/ServerUrl';

export default class AuthV1 extends HttpConnect {
  constructor() {
    const httpHeaders = new HttpHeaders
      .Builder()
      .setNoCacheControl()
      .setJsonContentType()
      .build();

    const serverUrl = new ServerUrl
      .Builder()
      .setApi()
      .build();

    super(
      httpHeaders.getHeader(),
      `${serverUrl.getUrl()}api/v1/`,
    );
  }

  signIn(fromBody) {
    return super.post('auth/signin', fromBody);
  }

  signUp(fromBody) {
    return super.post('auth/signup', fromBody);
  }

  signOut(fromBody) {
    return super.post('auth/signout', fromBody);
  }
}
