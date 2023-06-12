import React from "react";
import { Text, View } from "react-native";
import Location from "../components/location";
import Swipper from "../components/swiper";
import Foods from "../components/movies";

const App = () => {
    return(
        <View style={{marginTop:13, marginHorizontal: 7}}>
            <Location />
            <Swipper />
            
        </View>

    );
};

export default App;