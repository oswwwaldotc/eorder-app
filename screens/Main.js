import React, {Component} from 'react';
import 
{
    View,
    Text, 
    Button,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
    
} from 'react-native';


export default class Main extends React.Component {
    render(){
        return(
        <View style={styles.container}>
             <View style={styles.barNav}>
            <Text style={styles.titulo}>MENÚ PRINCIPAL</Text>
            </View>
            <View style={styles.seccion}>
                <View style={styles.rows}>
                    <View style={styles.cols}>
                        <Image style={styles.img} source={require("../assets/Images/menu.png")}/>
                        <View >
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                        <Text style={styles.button}>MENU</Text>
                        </TouchableOpacity>  
                </View>
                    </View>
                    <View style={styles.cols}>
                        <Image style={styles.img}  source={require("../assets/Images/espacios.png")}/>  
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                        <Text style={styles.button}>ESPACIOS</Text>
                        </TouchableOpacity>  
                    </View>
                    </View>
                <View style={styles.rows2}>
                    <View style={styles.cols} >
                        <Image style={styles.img}  source={require("../assets/Images/reportes.png")}/>
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                        <Text style={styles.button}>REPORTES</Text>
                        </TouchableOpacity>  
                    </View>
                    <View style={styles.cols} >
                        <Image style={styles.img}   source={require("../assets/Images/sucursal.png")}/>
                        <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                        <Text style={styles.button}>SUCURSAL</Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </View>
            <View style={styles.btnSalir} >
                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Door') }>
                    <Text style={styles.button}>SALIR</Text>
                    </TouchableOpacity>  
                </View>
        </View>
        
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
        textAlign:'center',
        overflow: 'hidden',
        width:'100%',
       alignItems: 'center'
    
      },
      titulo: {
        fontSize:30,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
      },
    seccion:{
        flex:0.7,
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
        flex:1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
       
    },
    
    img: {
        width: 150,
        height: 150
        
    },
    button:{
        backgroundColor: '#ff7f50',
        borderColor: 'white',
        borderWidth: 5,
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
        marginTop: 15,
        width: 200
    }, 
    btnSalir: {
        marginTop: 50
    }

});