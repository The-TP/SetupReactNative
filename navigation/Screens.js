import { Animated, Dimensions, Easing } from 'react-native';
// header for screens
import { Header, Icon } from '../components';
import { argonTheme, tabs } from '../constants';

import Articles from '../screens/Articles';
import { Block } from 'galio-framework';
// drawer
import CustomDrawerContent from './Menu';
import Elements from '../screens/Elements';
// screens
import {
    Login,
    CustomerNavigate,
    CustomerClearance,
    SurveyCustomer,
    Customer,
    CustomerConstruction,
    CustomerEstimate,
    CustomerAcceptance,
    Pro,
    Profile,
    Home,
    Register,
} from '../screens';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="ElementsScreen"
                component={Elements}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Elements" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="Pro"
                component={Pro}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="" back white transparent navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
}

function ArticlesStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: 'screen',
            }}
        >
            <Stack.Screen
                name="ArticlesSreen"
                component={Articles}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Articles" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="Pro"
                component={Pro}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="" back white transparent navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
}

function ProfileStack(props) {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                mode: 'card',
                headerShown: 'screen',
            }}
        >
            <Stack.Screen
                name="ProfileScreen"
                component={Profile}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header transparent white title="Profile" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#FFFFFF' },
                    headerTransparent: true,
                }}
            />
            <Stack.Screen
                name="Pro"
                component={Pro}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="" back white transparent navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
}

function HomeStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: 'screen',
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Trang chủ" search options navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="Pro"
                component={Pro}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="" back white transparent navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    );
}

function CustomerStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: 'screen',
            }}
        >
            <Stack.Screen
                name="CustomerNavigateScreen"
                component={CustomerNavigate}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khách hàng" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="CustomerScreen"
                component={Customer}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Đăng ký khách hàng" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="SurveyCustomerScreen"
                component={SurveyCustomer}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khảo sát khách hàng" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="CustomerClearanceScreen"
                component={CustomerClearance}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khách hàng chờ giải phóng mặt bằng" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="CustomerConstructionScreen"
                component={CustomerConstruction}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khách hàng chờ thi công" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="CustomerEstimateScreen"
                component={CustomerEstimate}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khách hàng chờ dự toán thiết kế" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
            <Stack.Screen
                name="CustomerAcceptanceScreen"
                component={CustomerAcceptance}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Khách hàng hoàn thành thi công" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: '#F8F9FE' },
                }}
            />
        </Stack.Navigator>
    );
}

export default function LoginStack(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                mode: 'card',
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                component={Login}
                option={{
                    headerTransparent: true,
                }}
            />
            <Stack.Screen name="App" component={AppStack} />
        </Stack.Navigator>
    );
}

function AppStack(props) {
    return (
        <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: 'white',
                width: width * 0.8,
            }}
            screenOptions={{
                activeTintcolor: 'white',
                inactiveTintColor: '#000',
                activeBackgroundColor: 'transparent',
                itemStyle: {
                    width: width * 0.75,
                    backgroundColor: 'transparent',
                    paddingVertical: 16,
                    paddingHorizonal: 12,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                },
                labelStyle: {
                    fontSize: 18,
                    marginLeft: 12,
                    fontWeight: 'normal',
                },
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Trang chủ"
                component={HomeStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Khách hàng"
                component={CustomerStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Account"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Elements"
                component={ElementsStack}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Articles"
                component={ArticlesStack}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
}
