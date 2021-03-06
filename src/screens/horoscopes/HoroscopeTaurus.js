

//horoscope Taurus
import {useNavigation} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import GetItemInStorage from "../../../util/GetItemInStorage";
import SaveItemInStorage from "../../../util/SaveItemInStorage";
import {horoscopeArray} from "../../arrays/horoscopeArray";
import {numbersArray} from "../../arrays/numbersArray";
import {wordsArray} from "../../arrays/wordsArray";
import {lettersArray} from "../../arrays/lettersArray";
import {thanksArray} from "../../arrays/thanksArray";
import {adviceArray} from "../../arrays/adviceArray";
import {Image, ImageBackground, ScrollView, Text, View} from "react-native";
import {TouchableOpacity} from 'react-native';
import styles from "../../styles/styles";
import bgstars from "../../../assets/Bgstar.png";
import backButton from "../../../assets/FortuneCoffeePNGassets/reading/backButton.png";
import number from "../../../assets/FortuneCoffeePNGassets/horoscopes/Number.png";
import letter from "../../../assets/FortuneCoffeePNGassets/horoscopes/Letter.png";
import appre from "../../../assets/FortuneCoffeePNGassets/horoscopes/Appreciate.png";
import TaurusCard from "../../../assets/FortuneCoffeePNGassets/horoscopes/horoscopebtns/Taurus.png";
import love from "../../../assets/FortuneCoffeePNGassets/horoscopes/Love.png";
import career from "../../../assets/FortuneCoffeePNGassets/horoscopes/Career.png";
import luck from "../../../assets/FortuneCoffeePNGassets/horoscopes/Luck.png";
import TaurusTxt from "../../../assets/FortuneCoffeePNGassets/horoscopes/TAURUS.png";
import linehors from "../../../assets/FortuneCoffeePNGassets/horoscopes/Line_57.png";
import hottxt from "../../../assets/FortuneCoffeePNGassets/horoscopes/hottxt.png";
import advicetxt from "../../../assets/FortuneCoffeePNGassets/horoscopes/ADVICE.png";
import NavBar_hor from "../../navbars/NavBar_Horoscope";
import { Dimensions } from 'react-native';
import {widthPercentageToDP,heightPercentageToDP,} from '../../../util/scaler';
import { actuatedNormalize } from '../../../util/fontScaler';




function HoroscopeTaurus({}) {
    const navigation = useNavigation();
    const [randHoroscope, setRandomHoroscope] = useState('');
    const [randNumber, setRandomNumber] = useState('');
    const [randLetter, setRandomLetter] = useState('');
    const [randThanks, setRandomThanks] = useState('');
    const [randWord2, setRandomWord2] = useState('');
    const [randWord3, setRandomWord3] = useState('');
    const [randWord4, setRandomWord4] = useState('');
    const [randAdvice, setRandomAdvice] = useState('');





    useEffect(()=>{
        let mounted = true;

        if(mounted){
            // We can put them all together
            HoroscopeRandomizer();
            AdviceRandomizer();
            ThanksRandomizer();
            LetterRandomizer();
            Word4Randomizer();
            Word3Randomizer();
            Word2Randomizer();
            NumberRandomizer();
        }
        return()=>{
            mounted =false;
        }
    },[navigation])


    const HoroscopeRandomizer = async () =>{

        // Async storage, Key , Date
        const randomHoroscope = await GetItemInStorage("HOROSCOPE_RANDOM_TIMER_Taurus");
        console.log(randomHoroscope)
        if(!randomHoroscope){
            await SaveItemInStorage("HOROSCOPE_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * horoscopeArray.length))
            await SaveItemInStorage("HOROSCOPE_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomHoroscope(getRandomHoroscope(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomHoroscope);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)

            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * horoscopeArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomHoroscope(getRandomHoroscope(random));
                await SaveItemInStorage("HOROSCOPE_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("HOROSCOPE_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("HOROSCOPE_RANDOM_NUMBER_Taurus")
                await setRandomHoroscope(getRandomHoroscope(parseInt(getOldRandomNumber)));
                // Display previous horoscope.
            }

        }

    }

    //NUMBER
    const NumberRandomizer = async () =>{

        // Async storage, Key , Date
        const randomNumber = await GetItemInStorage("NUMBER_RANDOM_TIMER_Taurus");
        if(!randomNumber){
            await SaveItemInStorage("NUMBER_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * numbersArray.length))
            await SaveItemInStorage("NUMBER_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomNumber(getRandomNumber(random));

        }else{
            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(getRandomWord2);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)
            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * numbersArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomNumber(getRandomNumber(random));
                await SaveItemInStorage("NUMBER_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("NUMBER_RANDOM_NUMBER_Taurus", random.toString())
            }
            else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("NUMBER_RANDOM_NUMBER_Taurus")
                await setRandomNumber(getRandomNumber(getOldRandomNumber));
                // Display previous horoscope.
            }

        }
    }


    const Word2Randomizer = async () =>{

        // Async storage, Key , Date
        const randomWord2 = await GetItemInStorage("WORD2_RANDOM_TIMER_Taurus");
        console.log(randomWord2)
        if(!randomWord2){
            await SaveItemInStorage("WORD2_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * wordsArray.length))
            await SaveItemInStorage("WORD2_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomWord2(getRandomWord2(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomWord2);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)

            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * wordsArray.length))
                console.log("One day has passed, getting new horoscope")
                await SaveItemInStorage("WORD2_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("WORD2_RANDOM_NUMBER_Taurus", random.toString())
                await setRandomWord2(getRandomWord2(random));
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("WORD2_RANDOM_NUMBER_Taurus")
                await setRandomWord2(getRandomWord2(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }


    const Word3Randomizer = async () =>{

        // Async storage, Key , Date
        const randomWord3 = await GetItemInStorage("WORD3_RANDOM_TIMER_Taurus");
        console.log(randomWord3)
        if(!randomWord3){
            await SaveItemInStorage("WORD3_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * wordsArray.length))
            await SaveItemInStorage("WORD3_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomWord3(getRandomWord3(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomWord3);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)

            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * wordsArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomWord2(getRandomWord3(random));
                await SaveItemInStorage("WORD3_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("WORD3_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("WORD3_RANDOM_NUMBER_Taurus")
                await setRandomWord3(getRandomWord3(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }

    const Word4Randomizer = async () =>{

        // Async storage, Key , Date
        const randomWord4 = await GetItemInStorage("WORD4_RANDOM_TIMER_Taurus");
        console.log(randomWord4)
        if(!randomWord4){
            await SaveItemInStorage("WORD4_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * wordsArray.length))
            await SaveItemInStorage("WORD4_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomWord4(getRandomWord4(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomWord4);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)

            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * wordsArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomWord4(getRandomWord4(random));
                await SaveItemInStorage("WORD4_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("WORD4_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("WORD4_RANDOM_NUMBER_Taurus")
                await setRandomWord4(getRandomWord4(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }


    const LetterRandomizer = async () =>{

        // Async storage, Key , Date
        const randomLetter = await GetItemInStorage("Letter_RANDOM_TIMER_Taurus");
        console.log(randomLetter)
        if(!randomLetter){
            await SaveItemInStorage("Letter_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * lettersArray.length))
            await SaveItemInStorage("Letter_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomLetter(getRandomLetter(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomLetter);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)
            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * lettersArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomLetter(getRandomLetter(random));
                await SaveItemInStorage("Letter_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("Letter_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("Letter_RANDOM_NUMBER_Taurus")
                await setRandomLetter(getRandomLetter(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }

    const ThanksRandomizer = async () =>{

        // Async storage, Key , Date
        const randomThanks = await GetItemInStorage("Thanks_RANDOM_TIMER_Taurus");
        console.log(randomThanks)
        if(!randomThanks){
            await SaveItemInStorage("Thanks_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * thanksArray.length))
            await SaveItemInStorage("Thanks_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomThanks(getRandomThanks(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomThanks);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)
            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * thanksArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomThanks(getRandomThanks(random));
                await SaveItemInStorage("Thanks_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("Thanks_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("Thanks_RANDOM_NUMBER_Taurus")
                await setRandomThanks(getRandomThanks(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }

    const AdviceRandomizer = async () =>{
        // Async storage, Key , Date
        const randomAdvice = await GetItemInStorage("Advice_RANDOM_TIMER_Taurus");
        console.log(randomAdvice)
        if(!randomAdvice){
            await SaveItemInStorage("Advice_RANDOM_TIMER_Taurus", new Date().getTime().toString())
            let random = Math.floor((Math.random() * adviceArray.length))
            await SaveItemInStorage("Advice_RANDOM_NUMBER_Taurus", random.toString())
            await setRandomAdvice(getRandomAdvice(random));

        }else{

            let currentDate = parseInt(new Date().getTime().toString());
            let previousDate = parseInt(randomAdvice);

            let newPreviousDate = parseInt(previousDate) + 86400000;
            console.log("CurrentDate : " ,currentDate)
            console.log("Previous Date : " ,newPreviousDate)
            // 86400000 = 1 day
            if((previousDate + 86400000) < currentDate){
                // if one day has passed
                // Grab a random number
                let random = Math.floor((Math.random() * adviceArray.length))
                console.log("One day has passed, getting new horoscope")
                await setRandomAdvice(getRandomAdvice(random));
                await SaveItemInStorage("Advice_RANDOM_TIMER_Taurus", currentDate.toString())
                await SaveItemInStorage("Advice_RANDOM_NUMBER_Taurus", random.toString())
            }else{
                console.log("One day has not passed, will not reset the current horoscope")
                let getOldRandomNumber = await GetItemInStorage("Advice_RANDOM_NUMBER_Taurus")
                await setRandomAdvice(getRandomAdvice(getOldRandomNumber));
                // Display previous horoscope.
            }
        }
    }


    return (
        <View style={styles.mainContainer}> 
            <ImageBackground source={bgstars} style={styles.bgfull}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', padding: 10, marginTop: 5 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('HoroscopeMain')} style={{
                                left:widthPercentageToDP(0),
                                top:heightPercentageToDP(3)
                            }}>
                                   <Image source={backButton} style={{width :widthPercentageToDP('13'), height :heightPercentageToDP('6'), resizeMode:'contain'}} />
                    </TouchableOpacity>
                </View>
            <ScrollView directionalLockEnabled={true} automaticallyAdjustContentInsets={true} >
            
                <View style={{ flex: 1, alignItems: 'center', marginTop:30 }}>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' , marginRight:12}}>

                            <Image source={number} style={{ width :widthPercentageToDP('17'), height :heightPercentageToDP('2'), resizeMode:'contain',marginTop: 10 }} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5,marginLeft:3}}> {randNumber}  </Text>

                            <Image source={letter} style={{ width :widthPercentageToDP('12'), height :heightPercentageToDP('2'), resizeMode:'contain',marginTop: 10 }} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5,marginLeft:3}}> {randLetter}  </Text>

                            <Image source={appre} style={{ width :widthPercentageToDP('22'), height :heightPercentageToDP('4'), resizeMode:'contain',marginTop: 10 }} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5,marginLeft:3}}> {randThanks}  </Text>

                        </View>
                        <Image source={TaurusCard} style={{ width :widthPercentageToDP('30'), height :heightPercentageToDP('30'), resizeMode:'contain',justifyContent: 'space-evenly',left:"-5%"}} />

                        <View style={{  flexDirection: 'column', justifyContent: 'space-evenly'}}>
                            <Image source={love} style={{width :widthPercentageToDP('10'), height :heightPercentageToDP('2'), resizeMode:'contain', marginTop: 10}} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5, marginLeft:3}}> {randWord2}  </Text>
 

                            <Image source={career} style={{width :widthPercentageToDP('14'), height :heightPercentageToDP('2'), resizeMode:'contain',marginTop: 10}} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5, marginLeft:3}}> {randWord3}  </Text>

                            <Image source={luck} style={{ width :widthPercentageToDP('9'), height :heightPercentageToDP('2'), resizeMode:'contain',marginTop: 0 }} />
                            <Text style={{fontSize: actuatedNormalize (12), color:'white', marginTop:5, marginLeft:3}}> {randWord4}  </Text>


                        </View>
                    </View>

                    <Image source={TaurusTxt} style={{ alignItems: 'center', marginTop: 18, width :widthPercentageToDP('24'), height :heightPercentageToDP('3'), resizeMode:'contain' }} />

                    <Image source={linehors} style={{  marginTop: 25 }} />
                    <View style={{  alignItems: 'center' }}>
                        <Image source={hottxt} style={{ alignItems: 'center', marginTop: 30,  width :widthPercentageToDP('50'), height :heightPercentageToDP('5'), resizeMode:'contain' }} />
                        <View style={styles.readingTableContainer2}>
                            <ScrollView>
                                <Text style={{fontSize:actuatedNormalize(13), color:'white'}}> {randHoroscope}  </Text>
                            </ScrollView>

                        </View>


                        <Image source={advicetxt} style={{ alignItems: 'center', marginTop:30,  width :widthPercentageToDP('18'), height :heightPercentageToDP('3'), resizeMode:'contain'}} />
                        <View style={styles.readingTableContainer2}>
                            <ScrollView style={{marginBottom:"30%"}} >
                                <Text style={{fontSize:actuatedNormalize(13), color:'white'}}> {randAdvice}  </Text>


                            </ScrollView>

                        </View>

                    </View>


                </View>
                </ScrollView>
                <NavBar_hor/> 
            </ImageBackground>
        </View>

    );

    function getRandomHoroscope(random) {
        console.log(random);
        let randHoroscope = horoscopeArray[random];
        console.log(randHoroscope);
        return randHoroscope;

    }
    function getRandomNumber(random) {
        console.log(random);
        let randNumber = numbersArray[random];
        console.log(randNumber);
        return randNumber;

    }

    function getRandomLetter(random) {
        console.log(random);
        let randLetter = lettersArray[random];
        console.log(randLetter);
        return randLetter;

    }
    function getRandomThanks(random) {
        console.log(random);
        let randThanks = thanksArray[random];
        console.log(randThanks );
        return randThanks;

    }

    function getRandomWord2(random) {
        console.log(random);
        let randWord = wordsArray[random];
        console.log(randWord);
        return randWord;

    }

    function getRandomWord3(random) {
        console.log(random);
        let randWord = wordsArray[random];
        console.log(randWord);
        return randWord;

    }
    function getRandomWord4(random) {
        console.log(random);
        let randWord = wordsArray[random];
        console.log(randWord);
        return randWord;

    }
    function getRandomAdvice(random) {
        console.log(random);
        let randAdvice= adviceArray[random];
        console.log(randAdvice);
        return randAdvice;

    }
}
export default HoroscopeTaurus