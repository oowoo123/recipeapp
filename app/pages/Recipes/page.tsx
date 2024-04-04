import React from 'react'; // Import React
import Chat from '../../chat/page'; // Import Chat component
import {Navbar} from '../../components/Navbar'; // Import Navbar component

export default function Home() {
    return (
      <>
      <Navbar/>
      <Chat/>
      </>
      
    );
  }