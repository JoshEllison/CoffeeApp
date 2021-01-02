import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, View} from "react-native";
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from "../../styles/styles";
import LunaSc from "../../../assets/FortuneCoffeePNGassets/Psychic/askluna/LunaSc.png";
import transparent from "../../../assets/FortuneCoffeePNGassets/Psychic/askluna/transparent.png";
import React from "react";
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../../util/scaler'


function LunaChat() {
    const navigation = useNavigation();
    return (

        <View style={styles.virtualContainer}>
            <ImageBackground source={LunaSc} style={styles.bgfull}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 25, marginTop: 18 }}>
                    <View style={{top:0, flexDirection:'row', width:'100%', margin:10}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('LunaChatComing')}}>
                            <Image source={transparent} style={styles.bgfull2}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        </View>

    )

}


export default LunaChat