import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Get A tour"}
          onPress={() => {
            console.warn("Get A tour was Pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Book this house"}
          onPress={() => {
            console.warn("Book this house was Pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
