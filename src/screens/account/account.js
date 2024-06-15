import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';
import styles from './account.styles';
// Quirky step required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const MAPTILER_API_KEY = "EEGDPU7G3Z4AgIsMeeGD";
const styleUrl = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`;

const Account = () => {
  return (
    <View style={styles.page}>
       <MapLibreGL.MapView
          style={styles.map}
          styleURL={styleUrl}
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
          <MapLibreGL.Camera
             defaultSettings={{centerCoordinate: [8.775656, 34.431141], zoomLevel: 8}}
             />
             <MapLibreGL.PointAnnotation
            id="userLocation"
            coordinate={[8.775656, 34.431141]}
            title="Your location"
          />

<MapLibreGL.MarkerView
            coordinate={[8.775656, 34.431141]}
            children={
              <Text
              style={{fontSize:20,fontWeight:"bold"}}
              >

                Station lavage
                </Text>
            }
            anchor={{x: 0, y: 0.5}}
          />
        </MapLibreGL.MapView>
      </View>
  );
};

export default Account;
