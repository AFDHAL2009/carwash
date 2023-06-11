import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import OneSignal from 'react-native-onesignal';
import Modal from 'react-native-modal';
import NotificationModal from '../../components/notification/notification';
import {REACT_APP_DEV_MODE} from '@env';
const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notif, setNotif] = useState({});
  const onsignal_Initialization = () => {
    // OneSignal Initialization
    OneSignal.setAppId('b1057881-bf6b-4aa1-a669-0f3e585a3555');
    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        setIsVisible(true);
        setNotif(data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
      const {additionalData} = notification.notification;
      setIsVisible(true);
      setNotif(additionalData);
    });
  };
  const Ignore = () => {
    setIsVisible(false);
  };
  onsignal_Initialization();
  const postUrl = process.env.BASE_URL;
  return (
    <SafeAreaView style={{flex: 1}}>
      <NotificationModal
        notification={notif}
        isVisible={isVisible}
        setIsVisible={Ignore}
      />
      <Text>ENV URL: {REACT_APP_DEV_MODE} </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
