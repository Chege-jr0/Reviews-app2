import { StatusBar } from 'expo-status-bar';
import Home from './screens/home'
import  { useFonts } from 'expo-font';
import Navigator from './routes/drawer'

const loadFonts = () => {
  return useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [isFontLoaded] = loadFonts();

  if (!isFontLoaded) {
    return 
    <Text>Loading fonts...</Text>;
  }

  return (
    <Navigator />
  );
}
