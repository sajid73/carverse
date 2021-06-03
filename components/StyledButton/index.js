import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = (Props) => {
    return (
        <View style={styles.container}>
            <Pressable
            style={styles.button}
            onPress={() => {
                
            }}
            >
            <Text style={styles.text}>Custom Order</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
