import React, { useState } from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Block, Text, theme } from 'galio-framework';
import { Icon } from '.';
import { argonTheme } from '../constants';

function DateTimePickerCustom() {
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (selectedDate) => {
        setDate(selectedDate);
        hideDatePicker();
    };

    return (
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <TouchableOpacity onPress={showDatePicker}>
                <Block flex style={styles.calendar}>
                    <Icon
                        size={11}
                        style={{ marginRight: 10, marginLeft: 10 }}
                        color={argonTheme.COLORS.ICON}
                        name="calendar-date"
                        family="ArgonExtra"
                    />
                    <Text>{date.toLocaleDateString('vi-VN')}</Text>
                </Block>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    date={date}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
        </Block>
    );
}

const styles = StyleSheet.create({
    calendar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderStyle: 'solid',
        border: 1,
        borderRadius: 4,
        borderColor: argonTheme.COLORS.BORDER,
        height: 44,
        backgroundColor: '#FFFFFF',
        shadowColor: argonTheme.COLORS.BLACK,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
    },
});

export default withNavigation(DateTimePickerCustom);
