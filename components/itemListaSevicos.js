import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';


const ItemSevico = ({listItemPropriedades, cor})=>{
  return(
    <View style={estilos.viewPrincipal}>
      <TouchableOpacity>
        <View style={estilos.viewImage}>
          <Image source={listItemPropriedades.image}/>
        </View>
        </TouchableOpacity>
      <Text style={[estilos.textTitulo,{color:cor}]}>{listItemPropriedades.titulo}</Text>
    </View>
  )
};

const estilos = StyleSheet.create({
  viewPrincipal:{
    width:80,
    height:90,
    alignItems:'flex-end',
    gap:10
  },
  viewImage:{
    width:73,
    height:73,
    borderRadius:73,
    backgroundColor:'#F0F1F5',
    alignItems:'center',
    justifyContent:'center'
  },
  textTitulo:{
    color:'black',
    fontSize:14,
    fontWeight:'600',
    width:'100%',
    textAlign:'center'
  }
});

export default ItemSevico;