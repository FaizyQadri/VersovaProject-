import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../routes/AuthStack';
import {BottomStackParam} from '../routes/BottomStack';

export type RootStackParamsList = {
  AuthStack: undefined;
  DrawerStack: undefined;
  BottomStack: undefined;
};
export type DefaultNavigationProps<T extends keyof RootStackParamsList> =
  NativeStackNavigationProp<RootStackParamsList, T>;
export type DefaultRouteProps<T extends keyof RootStackParamsList> = RouteProp<
  RootStackParamsList,
  T
>;
export type BottomTabNavigationProps<T extends keyof BottomStackParam> =
  NativeStackNavigationProp<BottomStackParam, T>;

export type AuthStackNavigationProps<T extends keyof AuthStackParams> =
  NativeStackNavigationProp<AuthStackParams, T>;
