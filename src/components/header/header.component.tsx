import { Dimensions, StyleSheet, View, Text } from "react-native"
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Movie } from "../../interfaces";

interface HeaderProps {
    data: Movie
}

export const Header = ({ data }: HeaderProps) => {



    return (
        <View 
        testID="header-component"
        style={headerStyles.container}>
            <Image
                source={data.posters.portrait.url}
                contentFit="cover"
                shouldRasterizeIOS
                style={{ width: "100%", height: "100%" }}
            />
            <View style={headerStyles.movieDetails}>
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.9)', 'transparent']}
                    locations={[0, 0.4, 1]}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0 }}
                    style={{ width: "100%", height: "100%" }}
                />
                <View style={headerStyles.containerDetails}>
                    <Text style={[headerStyles.text, headerStyles.textTitle]}>{data.title}</Text>
                    <View style={headerStyles.textDetails}>
                        <Text style={headerStyles.text}>{data.year}</Text>
                        <Text style={headerStyles.text}>{data.duration}</Text>
                        <Text style={[headerStyles.rating, headerStyles.text]}>{data.rating}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Feather name="tv" size={24} color="white" />
                        <Text style={[headerStyles.text, { fontSize: 18, lineHeight: 24, letterSpacing: -0.8 }]}>#1 in Movies Today</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export const headerStyles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        justifyContent: "flex-start",
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height * 0.4,
    },
    rating: {
        borderWidth: 0.5,
        borderColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10
    },
    textDetails: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    text: {
        fontFamily: 'PlusJakartaSans_800Regular',
        color: "#fff",
        fontWeight: "700",
        fontSize: 14,
        alignSelf: "center",
    },
    textTitle: {
        fontSize: 36,
        fontWeight: "800"
    },
    movieDetails: {
        width: "100%",
        zIndex: 5,
        position: "absolute",
        bottom: 0,
        height: "75%",
    },
    containerDetails: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        width: "100%",
        gap: 20
    }
})