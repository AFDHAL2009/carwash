import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import OneSignal from 'react-native-onesignal';
import {Dropdown} from 'react-native-element-dropdown';
import Modal from 'react-native-modal';
import NotificationModal from '../../components/notification/notification';
import {REACT_APP_DEV_MODE} from '@env';
import {onesignalConfig} from '../../configs/configs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons1 from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment/moment';
const data = [
  {label: 'Réference', value: '1'},
  {label: 'Numéro client', value: '2'},
  {label: 'Date', value: '3'},
];
const source_data = [
  {id: 1, date: '10/11/2023', reference: 'ND151420', phone: '0622112559'},
  {id: 2, date: '11/10/2021', reference: 'ND151480', phone: '0622112525'},
  {id: 3, date: '11/10/2022', reference: 'ND151920', phone: '0622112524'},
];
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notif, setNotif] = useState({});
  const {loading, userInfo, error} = useSelector(state => state.auth);

  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState(null);
  const [missions, setMissions] = useState(source_data);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  onesignalConfig();

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
      // setIsVisible(true);
      // setNotif(data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    },
  );

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log('OneSignal: notification opened:', notification);

    console.log(notification.action.actionId);
    alert(notification.action.actionId);
    const {additionalData} = notification.notification;
    //setIsVisible(true);
    // setNotif(additionalData);
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    setSearchValue(moment(currentDate).format('L').toString());
  };
  const _renderItem = item => {
    return (
      <View
        style={{
          borderRadius: 15,
          width: '80%',
          height: 100,
          backgroundColor: 'green',
          //justifyContent: 'center',
          padding: 5,
          margin: 10,
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow',
          }}>
          <Text style={{fontSize: 18}}>Mission:</Text>
          <Text style={{fontSize: 14}}>{item.id}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text> réference </Text>
            <Text> Phone</Text>
            <Text> Date</Text>
          </View>
          <View>
            <Text> {item.reference}</Text>
            <Text> {item.date}</Text>
            <Text> {item.phone}</Text>
          </View>
        </View>
      </View>
    );
  };
  const Ignore = () => {
    setIsVisible(false);
  };
  const onClear = () => {
    setSearchValue('');
    setMissions(source_data);
  };
  const onSearch = _value => {
    setSearchValue(_value);

    console.log(_value);
    if (_value == '') {
      setMissions(source_data);
    } else {
      if (searchBy === data[0].label) {
        let data1 = source_data.filter(item => item.reference === _value);
        setMissions(data1);
      } else if (searchBy === data[1].label) {
        let data1 = source_data.filter(item => item.phone === _value);
        setMissions(data1);
      } else if (searchBy === data[2].label) {
        setShow(true);
        let data1 = source_data.filter(item => item.date === _value);
        setMissions(data1);
      }
    }
  };

  useEffect(() => {
    alert(JSON.stringify(userInfo));
    //setMissions(source_data);
    // Method for listening for notification clicks
  }, []);

  const onOpened = openResult => {
    if (openResult.action.actionID === 'accept') {
      // let roomId = openResult.notification.payload.additionalData.roomId;
      console.log('action accepted');
      alert('acepted');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      {/*<NotificationModal
        notification={notif}
        isVisible={isVisible}
        setIsVisible={Ignore}
      />*/}
      <Text>ENV URL: {REACT_APP_DEV_MODE} </Text>

      <View
        style={{
          marginTop: 100,
          width: '85%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'gray',
          alignSelf: 'center',
        }}>
        <Ionicons1 name={'search1'} size={20} color={'black'} />
        <TextInput
          style={{height: 40, width: '80%', backgroundColor: 'transparent'}}
          placeholder="Rechercher..."
          value={searchValue}
          onChangeText={text => onSearch(text)}
        />
        <TouchableOpacity onPress={() => onClear()}>
          <Ionicons1 name={'close'} size={20} color={'black'} />
        </TouchableOpacity>
      </View>
      <Dropdown
        style={{
          height: 50,
          // borderColor: 'gra',
          borderWidth: 0.5,
          borderRadius: 25,
          paddingHorizontal: 8,
          width: '85%',
          alignSelf: 'center',
          margin: 20,
        }}
        selectedTextStyle={{}}
        iconStyle={{width: 20, height: 20}}
        data={data}
        placeholder={'Filtrer par..'}
        maxHeight={300}
        labelField="label"
        valueField="value"
        selectedStyle={{borderRadius: 12}}
        onFocus={() => console.log('ok')}
        onBlur={() => console.log('ok')}
        renderItem={element => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 1,
              padding: 5,
              margin: 5,
            }}>
            <Text>{element.label}</Text>
          </View>
        )}
        renderLeftIcon={() => (
          <Ionicons1
            name="filter"
            size={20}
            color={'black'}
            style={{width: 20, height: 20, marginRight: 5}}
          />
        )}
        renderRightIcon={() => (
          <Ionicons
            name="chevron-down"
            size={20}
            color={'black'}
            style={{width: 20, height: 20, marginRight: 5}}
          />
        )}
        onChange={item => {
          setSearchBy(item.label);
          console.log(item.label);
          setSearchValue('');
        }}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}

      <View
        style={{
          borderRadius: 8,
          borderWidth: 1,
          width: '90%',
          alignSelf: 'center',
          flex: 1,
          justifyContent: 'center',
        }}>
        <FlatList
          data={missions}
          extraData={missions}
          renderItem={item => _renderItem(item.item)}
          keyExtractor={element => element.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
