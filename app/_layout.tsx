
import { SafeAreaProvider} from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";
import {  ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import InitialLayout from "./components/InitialLayout";




const publishablekey=process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishablekey) {
  throw new Error('Missing Publishable Key. Pleae set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file');
}

export default function RootLayout() {
  return ( 
  <ClerkProvider tokenCache={tokenCache}  >
    <ClerkLoaded>
   {/* <Slot /> */}
  <SafeAreaProvider>
  
    <SafeAreaView style={{ flex: 1,backgroundColor:"black" }}>
<InitialLayout />
  </SafeAreaView>
  </SafeAreaProvider>
  </ClerkLoaded>
  
  </ClerkProvider>
  );
}
