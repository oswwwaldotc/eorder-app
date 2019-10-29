import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
const { height } = Dimensions.get('window');

export default class Menu extends React.Component {

    state = {
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;
        return (
            <SafeAreaView>
                <ScrollView
                    style={{ flex: 1 }}
                    scrollEnabled={scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}>
                    <View style={styles.container}>
                        <View style={styles.barNav}>
                            <Text style={styles.titulo}>PLATILLOS</Text>
                        </View>
                        <View style={styles.seccion}>
                            <View style={styles.rows}>
                                <View style={styles.cols}>
                                    <Image style={styles.img} source={require("../assets/images/primerplato.png")} />
                                    <View >
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                            <Text style={styles.button}>PLATILLO ENTRADA</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.cols}>
                                    <Image style={styles.img} source={require("../assets/images/platofuerte.png")} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                        <Text style={styles.button}>PLATILLO PRINCIPAL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.rows2}>
                                <View style={styles.cols} >
                                    <Image style={styles.img} source={require("../assets/images/postre.png")} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                        <Text style={styles.button}>POSTRES</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.cols} >
                                    <Image style={styles.img} source={require("../assets/images/bebidas.png")} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                        <Text style={styles.button}>BEBIDAS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.btnSalir} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MainUser')}>
                                <Text style={styles.button}>SALIR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4B666',
        alignItems: 'center'
    },
    barNav: {
        backgroundColor: "#ff7f50",
        padding: 15,
        textAlign: 'center',
        overflow: 'hidden',
        width: '100%',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    seccion: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    rows: {
        flex: 0.7,
        flexDirection: 'row',
        marginTop: 10
    },
    rows2: {
        flex: 0.7,
        flexDirection: 'row',
        marginTop: 50
    },
    cols: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    img: {
        width: 150,
        height: 150
    },
    button: {
        backgroundColor: '#ff7f50',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 5,
        textAlign: 'center',
        marginTop: 15,
        width: 200
    },
    btnSalir: {
        marginTop: 50
    }
});