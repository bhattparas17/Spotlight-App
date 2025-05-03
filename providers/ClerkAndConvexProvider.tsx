

import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from 'react'
import { tokenCache } from "@clerk/clerk-expo/token-cache";  
import { ClerkProvider,ClerkLoaded,useAuth} from "@clerk/clerk-expo";
import { ConvexReactClient } from "convex/react";

const convex=new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!,{
    unsavedChangesWarning:false,});

const publishablekey=process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishablekey) {
  throw new Error('Missing Publishable Key. Pleae set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file');
}





export default function ClerkAndConvexProvider({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishablekey}  >
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <ClerkLoaded>{children}</ClerkLoaded>

        </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}