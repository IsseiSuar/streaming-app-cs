import { StyleSheet, View, Text, ScrollView } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import { getMovies, getMovieSelected } from "../../store"
import { Accordion, Carusel, HeaderDetails } from "../../components"
import { ContainerMovie } from "../../interfaces"
import { MovieSelectedDetails } from "../../components/movie-selected-details/movie-selected-details"

export const MovieDetailsScreen = () => {

    const movieSelected = useSelector(getMovieSelected);
    const movies = useSelector(getMovies)

    const getSimilarContent = () => {
        const similarContent: ContainerMovie = {
            id: "similar-content",
            layout:"landscape-card",
            title: "Similar Content",
            items: []
        }
        movies?.containers.forEach((item) =>{
            similarContent.items.push(...item.items.filter(movie => movieSelected?.similarContent.includes(movie.id)))
        })
        return similarContent
    }

    return (
        <ScrollView style={style.contatiner}>
            <HeaderDetails />
            <View style={style.actions}>
                <AntDesign name="playcircleo" size={45} color="white" />
                <View style={style.videoActions}>
                    <AntDesign name="plus" size={30} color="white" />
                    <AntDesign name="download" size={30} color="white" />
                </View>
            </View>
            <Text style={style.descriptionText}>{movieSelected?.description}</Text>
            <Carusel data={getSimilarContent()}></Carusel>
            <MovieSelectedDetails/>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    contatiner: {
        width: "100%",
        height: "100%",
        backgroundColor: "#09071d"
    },
    actions:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        paddingVertical:25,
        padding:15, backgroundColor:"#000",
        alignItems:"center"
    },
    videoActions:{
        flex:1, 
        justifyContent:"flex-end", 
        gap:15,
        alignItems:"center", 
        flexDirection:"row" 
    },
    descriptionText:{
        color:"#fff",
        fontFamily: 'PlusJakartaSans_700Italic',
        fontWeight:"700",
        width:"100%",
        backgroundColor:"#000",
        fontSize: 14,
        paddingHorizontal: 15

    }
})