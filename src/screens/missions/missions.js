import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Title} from 'react-native-paper';
import MissionItem from '../../components/mission/MissionItem';
import MissionModal from '../../components/mission/MissionModal';
const Missions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dataItem, setDataItem] = useState();
  const data = [
    {id: 1, name: 'afdhal', title: 'immediate'},
    {id: 2, name: 'bouha', title: 'immediate'},
    {id: 3, name: 'nejib', title: 'immediate'},
    {id: 4, name: 'other', title: 'immediate'},
    {id: 5, name: 'other', title: 'Reservation'},
    {id: 6, name: 'other', title: 'Reservation'},
  ];
  const handleEmpty = () => {
    return <Text> No data present!</Text>;
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{margin: '10%', justifyContent: 'center', alignItems: 'center'}}>
        <Title style={{fontSize: 25}}>Mes courses</Title>
        <MissionModal
          isVisible={modalVisible}
          onClose={() => setModalVisible(false)}
          item={dataItem}
        />
      </View>
      <FlatList
        data={data}
        ListEmptyComponent={handleEmpty}
        keyExtractor={item => item.id}
        renderItem={item => {
          return (
            <MissionItem
              data={item.item}
              Open={() => {
                console.log(item.item.name);
                setDataItem(item.item);
                setModalVisible(true);
              }}
            />
          );
        }}
        //onRefresh={}
      />
    </View>
  );
};

export default Missions;
