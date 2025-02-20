import { StyleSheet } from "react-native";
import theme from "../../../../constants/theme";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    alignItems: "center",
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,

  },
  title: {

    fontSize: theme.sizes.extraLarge,
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: theme.colors.secondary,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  mainButtonText: {
    fontSize: theme.sizes.medium,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  description: {
    fontSize: theme.sizes.small,
    color: theme.colors.text,
    marginBottom: 30,
    textAlign: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 0,
  },
  optionButton: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 20,
    width: 80,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: theme.colors.secondary,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionButtonText: {
    fontSize: theme.sizes.medium,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  watchView: {
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black", // Puedes cambiar el color del borde según tus necesidades
  },
  containerCamera: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // Agrega esta línea para alinear los elementos en la parte superior
  },
});

export default styles;
