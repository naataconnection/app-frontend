import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { View ,Text, Image} from "react-native";

MapboxGL.setAccessToken("pk.eyJ1IjoiYXJqdW5kZXkwMSIsImEiOiJja2xoc2tlbzgwNmUxMnBubW9zd2MwbjViIn0.t0RkaPLiuC9HijL97ISEFg");

const Map = (props)=>{

    const campusBounds=[[91.703392,26.202685],[91.686070,26.181202]];
    const campusCenter=[91.692992,26.190219];
    let ref;
    return(
        <View style={{flex:1}}>
            <MapboxGL.MapView 
            style={{flex: 1}}
            styleURL={"mapbox://styles/arjundey01/cklhz8zwu122o17p1tjy5cqu5"}
            >
                <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={campusCenter}
                    maxBounds={{ne:campusBounds[0],sw:campusBounds[1]}}
                    minZoomLevel={14}
                    // followUserLocation={true}
                />
                <MapboxGL.UserLocation/>
            </MapboxGL.MapView>
        </View>
    )
}

export default Map;