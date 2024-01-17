import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Block, Button as GaButton, Text, theme } from 'galio-framework';
import { argonTheme } from '../constants';

const { width } = Dimensions.get('screen');

const CustomerNavigate = ({ navigation }) => {
    return (
        <Block flex style={styles.group}>
            <Text bold size={16} style={styles.title}>
                Nghiệp vụ khách hàng lắp đặt máy nước
            </Text>
            <Block
                style={{
                    paddingHorizontal: theme.SIZES.BASE,
                    backgroundColor: '#0051A9',
                    borderRadius: 15,
                    paddingVertical: 20,
                }}
            >
                <Block row center space="between">
                    <Block flex middle right style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="user"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.FACEBOOK}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerScreen')}
                        />
                        <Text style={styles.description}>Đăng ký</Text>
                    </Block>
                    <Block flex middle center style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="eye"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.TWITTER}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('SurveyCustomerScreen')}
                        />
                        <Text style={styles.description}>Khảo sát</Text>
                    </Block>
                    <Block flex middle left style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="eraser"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.DRIBBBLE}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerClearanceScreen')}
                        />
                        <Text style={styles.description}>Giải phóng</Text>
                    </Block>
                </Block>
                <Block row center space="between">
                    <Block flex middle right style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="share"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.FACEBOOK}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerConstructionScreen')}
                        />
                        <Text style={styles.description}>Thi công</Text>
                    </Block>
                    <Block flex middle center style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="gears"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.TWITTER}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerEstimateScreen')}
                        />
                        <Text style={styles.description}>Dự toán</Text>
                    </Block>
                    <Block flex middle left style={styles.center}>
                        <GaButton
                            round
                            onlyIcon
                            shadowless
                            icon="check-square"
                            iconFamily="Font-Awesome"
                            iconColor={theme.COLORS.WHITE}
                            iconSize={theme.SIZES.BASE * 1.625}
                            color={theme.COLORS.DRIBBBLE}
                            style={[styles.social, styles.shadow]}
                            onPress={() => navigation.navigate('CustomerAcceptanceScreen')}
                        />
                        <Text style={styles.description}>Hoàn thành</Text>
                    </Block>
                </Block>
            </Block>
        </Block>
    );
};
const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    description: {
        textAlign: 'center',
        marginTop: 5,
        color: theme.COLORS.WHITE,
        fontWeight: 500,
    },
    title: {
        paddingBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE * 2,
        marginTop: 44,
        color: argonTheme.COLORS.HEADER,
    },
    group: {
        // paddingTop: theme.SIZES.BASE * 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.2,
        elevation: 2,
    },
    social: {
        width: theme.SIZES.BASE * 3.5,
        height: theme.SIZES.BASE * 3.5,
        borderRadius: theme.SIZES.BASE * 1.75,
        justifyContent: 'center',
    },
});
export default CustomerNavigate;
