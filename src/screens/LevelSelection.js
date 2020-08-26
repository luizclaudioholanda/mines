import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TouchableOpacityBase } from 'react-native';

export default props => {

    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select level</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={()=> props.onLevelSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={()=> props.onLevelSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Medium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={()=> props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difficulty</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>       
    )
}

const styles = StyleSheet.create({

    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button:{
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy:{
        backgroundColor: '#49B65D'
    },
    bgNormal:{
        backgroundColor: '#2765F7'
    },
    bgHard:{
        backgroundColor: '#F26337'
    }

})