import React from 'react';
import {View, Text, SafeAreaView, FlatList, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Title} from 'react-native-paper';

const MissionItem = props => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 10,
        backgroundColor: '#E2E3E5',
      }}
      onPress={props.Open}>
      <Text style={{alignSelf: 'center', color: 'red', fontFamily: 'Roboto'}}>
        {props.data.title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10}}>
          <Text>start</Text>
          <Text>Arrived</Text>
          <Text>Date</Text>
        </View>
        <View style={{padding: 10}}>
          <Text>{props.data.name}</Text>
          <Text>{props.data.title}</Text>
          <Text>{props.data.id}</Text>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <Text>Reference:</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MissionItem;
