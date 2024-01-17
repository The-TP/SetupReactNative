import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { Button, DropdownComponent, Input } from '../components';
import DateTimePicker from '../components/DateTimePickerCustom';
import { argonTheme } from '../constants';
import axios from 'axios';
const { width } = Dimensions.get('screen');

const SurveyCustomer = ({ navigation }) => {
    const [data, setData] = useState({
        id: '',
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        type: '',
        typeCustomer: '',
        date: '',
    });
    const [countries, setCountries] = useState([]);
    const [city, setCity] = useState({
        name: 'Thành phố Hải Phòng',
        code: 31,
    });
    const customData = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const typeCustomer = [
        { label: 'Thuộc diện miễn phí', value: '1' },
        { label: 'Thuộc diện mất phí', value: '2' },
        { label: 'Thuộc diện mất phí theo dự toán thiết kế', value: '3' },
        { label: 'Thuộc diện phải chờ giải phóng mặt bằng', value: '4' },
        { label: 'Thuộc diện thi công được ngay', value: '5' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://provinces.open-api.vn/api/?depth=2');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChangeCity = (selectedValue) => {
        setCity(selectedValue);
    };
    return (
        <ScrollView>
            <Button
                small
                icon="reply"
                iconFamily="Font-Awesome"
                style={{ marginLeft: 50, marginTop: 20 }}
                onPress={() => navigation.navigate('CustomerNavigateScreen')}
            >
                Trở lại
            </Button>
            <Block flex style={styles.home}>
                <Text style={styles.title}>Mã khách hàng</Text>
                <DropdownComponent
                    text="Chọn mã khách hàng"
                    data={customData}
                    labelField="label"
                    valueField="value"
                    onChangeText={(text) => setData({ ...data, id: text })}
                />
                <Text style={styles.title} p>
                    Tên khách hàng
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, name: text })}
                        value={data.name}
                    />
                </Block>

                <Text style={styles.title} p>
                    Số CCCD
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, address: text })}
                        value={data.address}
                    />
                </Block>
                <Text style={styles.title} p>
                    Ngày cấp
                </Text>
                <Block>
                    <DateTimePicker />
                </Block>

                <Text style={styles.title} p>
                    Nơi cấp
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, email: text })}
                        value={data.email}
                    />
                </Block>
                <Text style={styles.title} p>
                    Địa chỉ thực tế
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, address: text })}
                        value={data.address}
                    />
                </Block>
                <Text style={styles.title} p>
                    Địa chỉ trên giấy tờ
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, address: text })}
                        value={data.address}
                    />
                </Block>
                <Text style={styles.title} p>
                    Tỉnh/Thành phố
                </Text>
                {countries && (
                    <DropdownComponent
                        text="Chọn tỉnh thành phố"
                        data={countries}
                        labelField="name"
                        valueField="code"
                        defaultValue={city}
                        onChange={handleChangeCity}
                    />
                )}

                <Text style={styles.title} p>
                    Quận/Huyện
                </Text>
                {countries.filter((item) => item.code == city.code).length > 0 && (
                    <DropdownComponent
                        text="Chọn quận huyện"
                        data={countries.find((item) => item.code === city.code).districts}
                        labelField="name"
                        valueField="code"
                    />
                )}
                <Text style={styles.title} p>
                    Khi cần liên hệ Ông/bà
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, email: text })}
                        value={data.email}
                    />
                </Block>
                <Text style={styles.title} p>
                    SĐT
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, phoneNumber: text })}
                        value={data.phoneNumber}
                        maxLength={11}
                    />
                </Block>
                <Text style={styles.title} p>
                    Email
                </Text>
                <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
                    <Input
                        right
                        iconContent={<Block />}
                        onChangeText={(text) => setData({ ...data, email: text })}
                        value={data.email}
                    />
                </Block>
                <Text style={styles.title} p>
                    Loại khách hàng
                </Text>
                <DropdownComponent
                    text="Chọn loại khách hàng"
                    data={typeCustomer}
                    onChangeText={(text) => setData({ ...data, typeCustomer: text })}
                />
                <Text style={styles.title} p>
                    Ngày khảo sát
                </Text>
                <Block>
                    <DateTimePicker />
                </Block>

                <Block row space="evenly" style={{ marginTop: 20 }}>
                    <Block flex center>
                        <Button small center color="primary" style={styles.optionsButton}>
                            Thêm
                        </Button>
                    </Block>
                    <Block flex center>
                        <Button small center color="default" style={styles.optionsButton}>
                            Sửa
                        </Button>
                    </Block>
                    <Block flex center>
                        <Button small center color="error" style={styles.optionsButton}>
                            Xóa
                        </Button>
                    </Block>
                </Block>
            </Block>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    home: {
        width: width,
        padding: 30,
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        paddingVertical: theme.SIZES.BASE,
    },
    title: {
        fontSize: 15,
        marginLeft: 15,
        fontWeight: 600,
        color: argonTheme.COLORS.HEADER,
    },
    select: {
        width: width * 0.77,
    },
});

export default SurveyCustomer;
