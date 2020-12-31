import {useNavigation} from "@react-navigation/native";
import {Image, TouchableOpacity, View} from "react-native";
import Ellipse1 from "../../assets/FortuneCoffeePNGassets/HomePage/ellipse.png";
import styles from "../styles/styles";
import HorosbtnW from "../../assets/FortuneCoffeePNGassets/HomePage/horW.png";
import Psychicbtn from "../../assets/FortuneCoffeePNGassets/HomePage/psyhbtn.png";
import HomeB from "../../assets/FortuneCoffeePNGassets/HomePage/homeb.png";
import Favorites from "../../assets/FortuneCoffeePNGassets/HomePage/Favorites.png";
import Profilebtn from "../../assets/FortuneCoffeePNGassets/HomePage/Profile.png";
import React from "react";

function NavBar_hor(){
    const navigation = useNavigation();
    return(
        <View style={{flex:1, backgroundColor:'#070631', height:'30%', alignItems:'center', alignContent:'center'}}>
            <Image source={Ellipse1} style={styles.ellipse} />
            <View style={{flexDirection:'row', width:'80%', justifyContent: 'space-between', position:'absolute', bottom: "0%", paddingBottom:10}}>
                <TouchableOpacity onPress={() => navigation.navigate('HoroscopeMain')}>
                    <Image source={HorosbtnW}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Psychic')}>
                    <Image source={Psychicbtn} style={{ marginRight:30, bottom:'80%'}}  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={HomeB} style={{ bottom:'120%'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                    <Image source={Favorites} style={{ marginLeft:30, bottom:'65%'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileLoggedIn')}>
                    <Image source={Profilebtn} style={{ bottom: "0%", paddingBottom:10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar_hor