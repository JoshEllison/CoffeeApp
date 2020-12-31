import {useNavigation} from "@react-navigation/native";
import React, {useState} from "react";
import {Button, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../styles/styles";
import readingBackground from "../../assets/FortuneCoffeePNGassets/reading/readingBackground.png";
import backButton from "../../assets/FortuneCoffeePNGassets/reading/backButton.png";
import userImg from "../../assets/FortuneCoffeePNGassets/reading/user.png";
import LoginChecker from "../../util/validators/LoginChecker";
import saveButton from "../../assets/FortuneCoffeePNGassets/reading/saveButton.png";
import coffeeImg from "../../assets/FortuneCoffeePNGassets/reading/coffee.png";
import yourFortune from "../../assets/FortuneCoffeePNGassets/reading/yourFortune.png";
import NavBar from "../navbars/NavBar";
import {fortunesArray} from "../arrays/fortunesArray";
import db from "../../util/firestore/firestore";
import * as firebase from "firebase";

function Reading({}){
    const navigation = useNavigation();
    var userName = '!';

    const [buttonClicked, setButtonClicked] = useState(false);
    const [randomFortune, setRandomFortune] = useState('');
    return (
        <View style={styles.virtualContainer}>
            <ImageBackground source={readingBackground} style={styles.virtualOne}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 25, marginTop: 18}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <Image source={backButton} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image source={userImg} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexInRowsCoffee}>
                    <TouchableOpacity onPress={() => {
                        LoginChecker().then((results) => {
                            if(results){
                                onSave()
                            }
                            else{
                                navigation.navigate('SignUp');
                            }
                        })
                    }}>
                        <Image source={saveButton} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.helloUserTextContainer}> Your Fortune{userName} </Text>
                        <Image source={coffeeImg} style={{ marginTop: 20 }} />
                    </View>
                    {/*<TouchableOpacity onPress={() => console.log("SHARE")}>
              <Image source={shareButton} style={{ alignSelf: 'flex-end' }} />
            </TouchableOpacity>*/}
                </View>
                <View style={styles.readingTableContainer}>
                    <Image source={yourFortune} style={{marginBottom:12}} />
                    <ScrollView>
                        <Text style={{fontSize:17, color:'white'}}> {randomFortune}  </Text>

                        {!buttonClicked ? (
                            <Button
                                onPress={() => {
                                    setRandomFortune(getRandomFortune)
                                    setButtonClicked(true)
                                }}
                                title='Fortune Ready Click To View!'
                            >
                            </Button>
                        ) : null}

                    </ScrollView>
                </View>
                <NavBar/>
            </ImageBackground>
        </View>
    )

    function getRandomFortune() {
        let random = Math.floor((Math.random() * fortunesArray.length))
        console.log(random);
        let fortune = fortunesArray[random];
        console.log(fortune);
        return fortune;
    }

    //FIRESTORE
    function onSave() {
        var today = new Date().toLocaleDateString('en-US', {month:'long', day:'numeric', year:'numeric'});
        var favRef = db.collection('users').doc(firebase.auth().currentUser.uid);
        favRef.update({
            'favorites' : firebase.firestore.FieldValue.arrayUnion(...[{'date': today, 'fortune': randomFortune}])
        })
        navigation.navigate('Favorites')
    }
}

export default Reading