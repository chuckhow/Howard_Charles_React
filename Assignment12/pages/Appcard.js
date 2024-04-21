import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AppTabs from './AppTabs';

export default function App() {
  const [active, setActive] = useState("FirstCard");
  
  return (
    <div className="App">
      <nav>
        <Button title="One" />
        <Button title="Two" />
        <Button title="Three" />
      </nav>
      <div>
        {active === "FirstCard" && <AppTabs title ="1"/>}
        {active === "SecondCard" && <AppTabs title ="2"/>}
        {active === "ThirdCard" && <AppTabs title ="3"/>}
      </div>
    </div>
  );
}
