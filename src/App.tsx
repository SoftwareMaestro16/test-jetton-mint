import { useState } from 'react';
import './App.css';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';
import { SendTx } from './SendTx';

function App() {
  return (
    <>
      <div className='mainContainer'>
      <TonConnectUIProvider
        manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
        uiPreferences={{
          
        }}
        actionsConfiguration={{
          modals: 'all',
          notifications: ['error'],
        }}
      >
        <h1>Jetton Minter</h1>
        <TonConnectButton />
        <SendTx />

      </TonConnectUIProvider>
      </div>
    </>
    
    
  );
}

export default App;