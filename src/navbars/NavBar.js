
// Home button changed
import {useNavigation} from "@react-navigation/native";
import {Image, View} from "react-native";
import {TouchableOpacity} from 'react-native';
import Ellipse1 from "../../assets/FortuneCoffeePNGassets/HomePage/ellipse.png";
import styles from "../styles/styles";
import Horosbtn from "../../assets/FortuneCoffeePNGassets/HomePage/horosbtn.png";
import Psychicbtn from "../../assets/FortuneCoffeePNGassets/HomePage/psyhbtn.png";
import Home from "../../assets/FortuneCoffeePNGassets/HomePage/Home.png";
import Favorites from "../../assets/FortuneCoffeePNGassets/HomePage/Favorites.png";
import Profilebtn from "../../assets/FortuneCoffeePNGassets/HomePage/Profile.png";
import React from "react";
import { Dimensions } from 'react-native';

import {widthPercentageToDP,heightPercentageToDP,} from '../../util/scaler'

function NavBar(){
    const navigation = useNavigation();

    return(
        <View style={{ backgroundColor:'#070631',  alignItems:'center', alignContent:'center'}}>
            <Image source={Ellipse1} style={{ position: 'absolute', bottom: heightPercentageToDP('-1'), width: widthPercentageToDP('100')}} />
            <View style={{flexDirection:'row', width:'80%', justifyContent: 'space-between', bottom: "0%", paddingBottom:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('HoroscopeMain')}>
                    <Image source={Horosbtn}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Psychic')}>
                    <Image source={Psychicbtn} style={{ marginRight:30, bottom:'80%'}}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={Home} style={{ bottom:'120%'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                    <Image source={Favorites} style={{ marginLeft:30, bottom:'65%'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileLoggedIn')}>
                    <Image source={Profilebtn} style={{ bottom:'0%',paddingBottom:10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar