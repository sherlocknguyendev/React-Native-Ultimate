

import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    text: {
        textTransform: 'uppercase',
        fontSize: 25
    },
    container: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        width: 200,
        marginLeft: 90,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: '#ccc'
    }
})

interface IProps {
    onPress: (v: string) => void
    title: string
}

const MyButton = (props: IProps) => {

    const { onPress, title } = props

    return (

        <Pressable
            onPress={() => onPress(title)}
            style={({ pressed }) => ({
                opacity: pressed === true ? 0.5 : 1,
                alignSelf: 'center'
            })}
        >
            <View style={styles.container}>

                <AntDesign
                    name='pluscircle'
                    size={30} color='grey'
                />

                <Text style={styles.text}>
                    Add
                </Text>


            </View>
        </Pressable>
    )
}

export default MyButton