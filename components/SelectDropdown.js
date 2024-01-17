import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownComponent = (props) => {
    const { data, text, labelField = 'label', valueField = 'value', defaultValue, onChange } = props;
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    // const renderLabel = () => {
    //     if (value || isFocus) {
    //         return <Text style={[styles.label, isFocus && { color: 'blue' }]}></Text>;
    //     }
    //     return null;
    // };

    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField={labelField}
                valueField={valueField}
                placeholder={!isFocus ? text : '...'}
                searchPlaceholder="Tìm kiếm..."
                value={defaultValue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                    if (onChange) {
                        onChange(item);
                    }
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <AntDesign style={styles.icon} color={isFocus ? 'blue' : 'black'} name="Safety" size={20} />
                )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
