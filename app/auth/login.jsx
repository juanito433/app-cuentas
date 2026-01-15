import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import "../../global.css";
import {
  Fredoka_300Light,
  Fredoka_400Regular,
  Fredoka_500Medium,
  Fredoka_600SemiBold,
  Fredoka_700Bold,
  useFonts,
} from "@expo-google-fonts/fredoka";
import { useState } from "react";
import { Eyes, EyeSlash } from "../../assets/icons/icons";

export default function Login() {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const [fontsLoaded] = useFonts({
    Fredoka_300Light,
    Fredoka_400Regular,
    Fredoka_500Medium,
    Fredoka_600SemiBold,
    Fredoka_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 justify-center px-6">
        {/* LOGO */}
        <View className="items-center mb-8 mt-14">
          <Image
            source={require("../../assets/images/micha bg.png")}
            style={{ width: "100%", height: 150, resizeMode: "contain" }}
          />

          <Text
            className="text-3xl"
            style={{ fontFamily: "Fredoka_400Regular" }}
          >
            Iniciar Sesión
          </Text>
        </View>

        {/* FORMULARIO */}
        <View className="space-y-5">
          {/* EMAIL */}
          <View>
            <Text style={{ fontFamily: "Fredoka_400Regular" }}>
              Correo electrónico
            </Text>

            <TextInput
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-lg px-4 py-3 mt-2"
              style={{ fontFamily: "Fredoka_400Regular" }}
            />
          </View>

          {/* PASSWORD */}
          <View>
            <Text style={{ fontFamily: "Fredoka_400Regular" }}>Contraseña</Text>

            <View className="relative mt-2">
              <TextInput
                placeholder="Contraseña"
                secureTextEntry={!visiblePassword}
                className="border border-gray-300 rounded-lg px-4 py-3 pr-12"
                style={{ fontFamily: "Fredoka_400Regular" }}
              />

              <TouchableOpacity
                onPress={() => setVisiblePassword(!visiblePassword)}
                className="absolute right-4 top-3"
              >
                {visiblePassword ? <Eyes /> : <EyeSlash />}
              </TouchableOpacity>
            </View>
          </View>

          {/* OLVIDÉ CONTRASEÑA */}
          <TouchableOpacity>
            <Text
              className="text-[#5037de] text-sm"
              style={{ fontFamily: "Fredoka_400Regular" }}
            >
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

          {/* BOTÓN */}
          <TouchableOpacity className="bg-[#5037de] rounded-lg py-4 items-center">
            <Text
              className="text-white text-base"
              style={{ fontFamily: "Fredoka_500Medium" }}
            >
              Ingresar
            </Text>
          </TouchableOpacity>

          {/* REGISTRO */}
          <TouchableOpacity className="items-center mt-4">
            <Text
              className="text-[#5037de]"
              style={{ fontFamily: "Fredoka_400Regular" }}
            >
              ¿No tienes una cuenta? Regístrate
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
