import { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { ApiService } from "../../services"
import { useDispatch } from "react-redux";
import { setMovies } from "../../store";
import { MovieData } from "../../interfaces";
import { Sections } from "../../components/sections";

export const HomeScreen = () => {
    const apiService = new ApiService("MOVIE");
    const dispatch = useDispatch();
    const [moviesData, setMoviesData] = useState<MovieData>()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await apiService.get({url:""});
            dispatch(setMovies(data as MovieData));
            setMoviesData(data as MovieData);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <FlatList
            data={moviesData?.containers}
            renderItem={({item, index}) => <Sections index={index} item={item} />}
            style={{backgroundColor:"#000", paddingBottom:20}}
            contentContainerStyle={{gap:15}}
        />
    )
}