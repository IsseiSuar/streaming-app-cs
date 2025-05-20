import { Dimensions, FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { Image } from 'expo-image';
import { ContainerMovie, Movie } from "../../interfaces";
import { navigationRef } from "../../navigation/AppNavigator";
import { useDispatch } from "react-redux";
import { setMovieSelected } from "../../store";

interface CaruselProps {
    data: ContainerMovie
}

interface CaruselItem {
    item: Movie;
    width: number;
    height: number;
    portrait: boolean;
}
const layout = Dimensions.get("screen");

const WIDTH_H = layout.width * 0.4;
const HEIGHT_H = layout.height * 0.25;

const WIDTH_V = layout.width * 0.75;
const HEIGHT_V = layout.height * 0.2;

const SPACING = 15;

export const Carusel = ({ ...props }: CaruselProps) => {
    const width = props.data.layout === "landscape-card" ? WIDTH_V : WIDTH_H;
    const height = props.data.layout === "landscape-card" ? HEIGHT_V : HEIGHT_H;
    const isPortrait = props.data.layout === "portrait-card"

    return (
        <View testID="carusel-component" style={styles.container}>
            <Text style={styles.textTitle}>{props.data.title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: SPACING }}
                snapToInterval={(isPortrait ? WIDTH_H : WIDTH_V) + 7.5 * 2}
                decelerationRate={"fast"}
                data={props.data.items}
                renderItem={({ item }) =>
                    <ItemCarusel item={item} width={width} height={height} portrait={isPortrait} />
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

const ItemCarusel = ({ ...props }: CaruselItem) => {

    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(setMovieSelected(props.item))
        navigationRef.navigate("MovieDetails", { id: props.item.id });
    }

    return (
        <Pressable style={{ width: props.width, height: props.height }} onPress={handlePress}>
           {/* <SharedElement id={`movie-${props.item.id}-poster`}> */}
           <Image
                source={props.portrait ? props.item.posters.portrait.url : props.item.posters.landscape.url}
                contentFit="cover"
                transition={500}
                style={styles.imagesContainer}
            />
           {/* </SharedElement> */}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    imagesContainer: {
        borderRadius: 10,
        width: "100%",
        height: "100%"
    },
    textTitle: {
        fontFamily: 'PlusJakartaSans_700Regular',
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 24,
        letterSpacing: -0.8,
        color: "#fff"
    },
    container: {
        gap: 15,
        padding: 15
    }
})