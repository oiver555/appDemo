import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from './screens/tabScreens/Feed'
import Settings from './screens/tabScreens/Settings'

// Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Feed" component={Settings} />
         </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}