import 'react-native-gesture-handler';
import { AuthContextProvider } from './src/hooks/authContext';
import Router from './src/router';



export default function App() {
  return (
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
  );
}