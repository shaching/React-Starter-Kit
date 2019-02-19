import AuthV1 from './Auth/V1/AuthV1';
import UserProfileV1 from './UserProfile/V1/UserProfileV1';

export default {
  loadAuthV1() {
    return new AuthV1();
  },

  loadUserProfileV1() {
    return new UserProfileV1();
  },
};
