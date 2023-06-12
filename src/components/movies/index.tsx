import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image } from "react-native"
import { FOOD } from "../../services/endpoints";
import { styles } from "./style";

const Foods = (props) => {
    const [food, setFood] = useState([]);

    const getFood = async () => {
        const foodResponse = await fetch(FOOD);
        const foodResponseJson = await foodResponse.json();

        setFood([...foodResponseJson.categories]);
        //  console.log(movie);

    };

    useEffect(() => {
        getFood();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View>

                {/* <Image style={{width:200, height:200}} source={{uri:`${BASE_URL+MOVIES}/w500/${item.backdrop_path}`}} /> */}


                {/* <Image style={{width:300, height:200}} source={{uri : `${IMAGES}${item.poster_path}`}} /> */}
                <Image style={styles.imgIcon} source={{ uri: item.strCategoryThumb }} ></Image>
                <Text style={styles.imgTitle}> {item.strCategory}  </Text>
            </View>
        );
    };

    return (
        <View style={styles.mainView}>
            <Text style={styles.heading}> Inspiration for your first order </Text>
            <FlatList data={food} renderItem={renderItem} horizontal={true} showsHorizontalScrollIndicator={false}></FlatList>

            <Text style={styles.title}>Best Food in {props.loc} </Text>
        </View>
    )
}

export default Foods;
