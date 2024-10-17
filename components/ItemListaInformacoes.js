import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


const ItemListaInformacoes = ({listaItem})=>{
    return(
        <View style={estilos.viewcard}>
            <View style={estilos.viewPrincipal}>
                <TouchableOpacity style={estilos.viewPrincipal}>
                    <Text style={estilos.textInforme}>{listaItem.item1}<Text style={estilos.textInforme2}>{listaItem.item2}</Text>{listaItem.item3}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const estilos = StyleSheet.create({
    viewcard:{
        width:264,
        margin:5
    },
    viewPrincipal:{
        width:263,
        height:80,
        borderRadius:12,
        backgroundColor:'#F0F1F5',
        alignItems:'center',
        justifyContent:'center'
    },
    textInforme:{
        color:'black',
        fontSize:14,
        fontWeight:'600',
    },
    textInforme2:{
        color:'#8A19D6',
        fontSize:14,
        fontWeight:'600'
    }
});

export default ItemListaInformacoes;