import react from "react";
import Swiper from "react-native-swiper";
import { Image, Text, View } from "react-native";
import { styles } from "./style";

const dishes = [
    {
        image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/CAT89.jpg?ver=27.37',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrT6e4XyzXQ0I6356dx_6hHTUDYtCUxftDDA&usqp=CAU'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5m_cS8nr7kQqpkYwXTr7WcTg2altRaVImkg&usqp=CAU',
    },
]


const Swipper = () => {
    return (
        <View style={styles.mainView}>


            <Swiper showsButtons={true} autoplay>
                <View style={styles.swipeView}>
                    <Image style={styles.dishIcon} source={{ uri: dishes[0].image }} />
                </View>

                <View style={styles.swipeView}>
                    <Image style={styles.dishIcon} source={{ uri: dishes[1].image }} />
                </View>

                <View style={styles.swipeView}>
                    <Image style={styles.dishIcon} source={{ uri: dishes[2].image }} />
                </View>
            </Swiper>

        </View>
    )
}

export default Swipper;

