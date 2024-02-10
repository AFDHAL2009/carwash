import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Title} from 'react-native-paper';

const MissionModal = props => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.isVisible}
      style={{}}
      onRequestClose={props.onClose}>
      {props.item && (
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: '#C2E5E6',
            elevation: 2,
            width: '98%',
            height: '60%',
            margin: 150,
            alignSelf: 'center',
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center'}}>{props.item.title}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center'}}>{props.item.name}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{alignSelf: 'center'}}>{props.item.id}</Text>
          </View>
          <TouchableOpacity onPress={props.onClose}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

export default MissionModal;
