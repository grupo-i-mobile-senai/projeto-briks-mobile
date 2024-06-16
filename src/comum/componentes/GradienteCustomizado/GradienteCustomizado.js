import { LinearGradient } from "expo-linear-gradient";

const GradienteCustomizado = (props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 1]}
      colors={props.cores}
      style={{
        flex: 1,
        height: 144,
        borderRadius: 8,
        // justifyContent: "center",
      }}
    >
      {props.children}
    </LinearGradient>
  );
};

export default GradienteCustomizado;
