import OneSignal from 'react-native-onesignal';
import {ONE_SIGNAL_APP_ID} from '@env';
export const onesignalConfig = () => {
  // OneSignal Initialization
  OneSignal.setAppId(ONE_SIGNAL_APP_ID);
  // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
  OneSignal.promptForPushNotificationsWithUserResponse();
};
