
import { HomeScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MovieDetailsScreen } from "../screens/movie-details/movie-details.screen";
import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "../types";



const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export const AppNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen 
                name="MovieDetails" 
                component={MovieDetailsScreen} 
            />
        </Stack.Navigator>
    )
}