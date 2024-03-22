import { View } from "react-native";
import TouristLocation from "./components/TouristLocation";

export default function App() {
  return (
    <TouristLocation
      description="Uma das 7 maravilhas do mundo!"
      name="Cristo Redentor"
      address="Rio de Janeiro"
      imageUrl={require("./assets/cristo-redentor.jpg")}
    />
  );
}
