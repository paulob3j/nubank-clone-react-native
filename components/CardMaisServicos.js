import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CardMaisServicos = ()=>{
    return(
        <View style={estilos.viewPrincipal}>
            <View style={estilos.card}>
                <Image style={estilos.image} source={require('../assets/image1.png')}/>
                <View style={estilos.cardTextos}>
                    <Text style={estilos.textTitulo}>Portabilidade de salário</Text>
                    <Text style={estilos.textInformacao}>Sua liberdade financeira comeca com você escolhendo...</Text>
                    <TouchableOpacity style={estilos.btn}>
                        <Text style={estilos.textBtn} >Conhecer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};


const estilos = StyleSheet.create({
    viewPrincipal:{
        padding:5
    },
    card:{
        width:236,
        height:272,
        borderRadius:8,
        backgroundColor:'#F0F1F5',
        alignItems:'center'
    },
    image:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        width:236,
        height:119,
    },
    cardTextos:{
        paddingTop:10,
        width:204,
        height:153,
        gap:14
    },
    textTitulo:{
        fontSize:16,
        fontWeight:'700',
        color:'black',
    },
    textInformacao:{
        fontSize:14,
        fontWeight:'400',
        color:'black',
    },
    btn:{
        width:117,
        height:46,
        backgroundColor:'#8A19D6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:23
    },
    textBtn:{
        color:'#ffff',
        fontSize:16,
        fontWeight:'600'
    }

});
export default CardMaisServicos;