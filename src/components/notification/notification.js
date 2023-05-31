import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
const NotificationModal = props => {
  return (
    <Modal
      isVisible={props.isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      hideModalContentWhileAnimating
      propagateSwipe
      animationInTiming={900}
      animationOutTiming={900}
      backdropTransitionInTiming={900}
      backdropTransitionOutTiming={900}>
      <View
        style={{
          backgroundColor: '#00BCD4',
          height: '80%',
          width: '100%',
          borderRadius: 25,
          borderWidth: 1,
          borderColor: '#fff',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 10,
            fontSize: 18,
          }}>
          Mission
        </Text>

        <View style={{flexDirection: 'row', margin: 15}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>from:</Text>
          <Text style={{color: 'red'}}>{props.notification.startAdress}</Text>
        </View>

        <View style={{marginLeft: 15}}>
          <Text style={{}}>.</Text>
          <Text style={{}}>.</Text>
          <Text style={{}}>.</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>To:</Text>
          <Text style={{color: 'red'}}>{props.notification.endAdress}</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
            height: '15%',
            marginTop: '80%',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => props.setIsVisible}
            style={{
              backgroundColor: 'white',
              width: '40%',
              borderRadius: 25,
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Ignorer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setIsVisible(false)}
            style={{
              backgroundColor: 'white',
              width: '40%',
              borderRadius: 25,
              height: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Accepter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default NotificationModal;
