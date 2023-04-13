import React, { useState, useEffect } from "react";
import { Text, View, PermissionsAndroid, Image } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import Geocoder from 'react-native-geocoder';
import { styles } from "./style";
import Foods from "../movies";


const Location = () => {

    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [address, setAddress] = useState('');

    const getLocation = async () => {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                title: 'Location Access Required',
                message: 'This app needs to access your location'
            },
            );

            if (permission === 'granted') {
                const currentLocation = await Geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position);

                        //getting latitude
                        const currentLatitude = JSON.stringify(position.coords.latitude);

                        //set latitude
                        setLatitude(currentLatitude);

                        //getting longitude
                        const currentLongitude = JSON.stringify(position.coords.longitude);

                        // set longitude
                        setLongitude(currentLongitude);

                        Geocoder.geocodePosition({ lat: position.coords.latitude, lng: position.coords.longitude }).then(res => {

                            console.log(res[0].adminArea)
                            setAddress(res[0].adminArea)
                        })
                            .catch(err => console.log(err))
                    }
                );

            }
        }
        catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getLocation();
    }, []);
    return (
        <View>
            <View style={styles.mainview}>
                <Image style={styles.locImg} source={require('../../assests/images/location.png')} />

                <View>
                    <View style={styles.mainview}>
                        <Text style={styles.homeTxt}>Home</Text>
                        <Image source={require('../../assests/images/down.png')} />
                    </View>

                    <Text style={styles.txt}>{address} {latitude} {longitude}</Text>

                </View>



            </View>

            <Foods loc={address} />

        </View>

    );
};

export default Location;