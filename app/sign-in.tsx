import icons from '@/constants/icons';
import images from '@/constants/images';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const { isLogged, loading, refetch, user } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;
  const handleLogin = async () => {
    // Handle Google login logic here
    console.log('Google login pressed');
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert('Login Failed', 'Please try again later.', [{ text: 'OK' }], {
        cancelable: true,
      });
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-center text-base uppercase text-black-200 font-rubik">
            Welcome to Restate
          </Text>
          <Text className="text-center text-2xl mt-2 text-black-300 font-rubik-bold">
            Let's Get You Closer To {'\n'}
            <Text className="text-primary-300">Your Dream Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Restate with google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
            onPress={handleLogin}
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik text-black-200 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
