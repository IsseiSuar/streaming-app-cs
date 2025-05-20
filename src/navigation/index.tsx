import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator, navigationRef } from './AppNavigator';

export const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <AppNavigator />
        </NavigationContainer>
    )
}