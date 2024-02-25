import React from 'react';
import { TouchableOpacity, View} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


function SettingsButton () {
    // Define navigation
    const navigation = useNavigation();

    // Handle
    const onPress = () => {
        navigation.navigate('Settings')
    }

    return (
        <TouchableOpacity onPress={onPress}style={styles.settings}>
            <View style={styles.settings_lines}></View>
            <View style={styles.settings_lines}></View>
        </TouchableOpacity>
    );
}

export default SettingsButton;
