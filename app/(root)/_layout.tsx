import { useGlobalContext } from '@/lib/global-provider';
import { Redirect, Slot } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppLayout = () => {
  const { isLogged, loading } = useGlobalContext();

  if (loading)
    return (
      <SafeAreaView className="bg-white h-full flex-1 items-center justify-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );

  if (!isLogged) return <Redirect href="/sign-in" />;

  return <Slot />;
};

export default AppLayout;
