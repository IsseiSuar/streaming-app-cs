import { Pressable, View, Text, StyleSheet } from "react-native"
import { Image } from 'expo-image';
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import { getMovieSelected } from "../../store";
import { headerStyles } from "../header";
import React from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { navigationRef } from "../../navigation/AppNavigator";

export const HeaderDetails = () => {

    const movieSelected = useSelector(getMovieSelected);

    const goBack = () => {
        navigationRef.goBack();
    }

    return (
        <View>
            <Pressable style={[style.button, { top: "15%", zIndex:10, position:"absolute" }]} onPress={goBack}>
                <Ionicons name="chevron-back-sharp" size={35} color="white" />
            </Pressable>
            <View style={headerStyles.container}>

                <View style={style.buttonsContainer}>
                    <Pressable style={[style.button, style.tvButton]}>
                        <FontAwesome5 name="tv" size={20} color="white" />
                    </Pressable>
                    <Pressable style={[style.button, { backgroundColor: "#fff" }]}>
                        <FontAwesome5 name="user-alt" size={24} color="black" />
                    </Pressable>
                </View>
                <Image
                    source={movieSelected?.posters.portrait.url}
                    contentFit="cover"
                    shouldRasterizeIOS
                    style={{ width: "100%", height: "100%" }}
                />
                <View style={headerStyles.movieDetails}>
                    <LinearGradient
                        colors={['rgba(0,0,0,6)', 'rgba(0,0,0,0.85)', 'transparent']}
                        locations={[0, 0.4, 1]}
                        start={{ x: 0.5, y: 1 }}
                        end={{ x: 0.5, y: 0 }}
                        style={{ width: "100%", height: "100%" }}
                    />
                    <View style={[headerStyles.containerDetails, { alignItems: "flex-start", paddingHorizontal: 20 }]}>
                        <Text style={[headerStyles.text, headerStyles.textTitle, { alignSelf: "flex-start" }]}>{movieSelected?.title}</Text>
                        <View style={headerStyles.textDetails}>
                            <Text style={[headerStyles.text, { opacity: 0.7 }]}>{movieSelected?.duration}</Text>
                            <Text style={[headerStyles.text, { opacity: 0.7 }]}>{movieSelected?.rating}</Text>
                            <Text style={[headerStyles.text, { opacity: 0.7 }]}>{movieSelected?.year}</Text>
                            <Text style={[headerStyles.text, { opacity: 0.7 }]}>{movieSelected?.quality}</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    tvButton: {
        backgroundColor: "#ffffff59",
        borderWidth: 0.5,
        borderColor: "#fff"
    },
    buttonsContainer: {
        position: "absolute",
        top: "20%",
        right: "5%",
        zIndex: 10,
        flexDirection: "row",
        gap: 15
    }
})
