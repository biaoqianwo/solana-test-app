import React from "react";
import Navbar from "../../components/Navbar";
function LandingPage() {
  return (
    <div className='w-full'>
      <Navbar shouldShowWallet={true} />

      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold text-gray-800'>Welcome to React JS starter template for solana dapp</h1>
        </div>
    </div>
  );
}

export default LandingPage;
