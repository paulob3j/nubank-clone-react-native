import {View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import ItemSevico from './itemListaSevicos';
import ItemListaInformacoes from './ItemListaInformacoes';
import CardMaisServicos from './CardMaisServicos';

//https://www.figma.com/file/JfR44zHKvKRQDeBPvoA7HL/projeto-tela-nubank-(Community)?type=design&node-id=1-169&mode=design&t=Dahk2oeYErPsyDn8-0

const Home = ({visibilidade})=>{

  const [mostarSaldo, setMostrarSaldo] = useState(false);
  const [imagemOlho, setImagemolho] = useState(require('../assets/OlhoFechado.png'))
  const [saldo, setSaldo] = useState('');
  const cores = ['#ffff','black'];
  const [cor, setCor]=useState(cores[0]);
  const [corTexto, setCorTexto]=useState(cores[1]);
  const [imagem, setImagem] =useState(require('../assets/Rectangle5.png'))

  const mudarCor = ()=>{
    mostrarSaldo();
    if(cor=='#ffff'){
      setCor(cores[1]);
      setCorTexto(cores[0]);
      setImagem(require('../assets/RectangleWhite5.png'));
    }else{
      setCor(cores[0]);
      setCorTexto(cores[1]);
      setImagem(require('../assets/Rectangle5.png'));
    }
  };

  const list = [
        {
          "image":require('../assets/Rectangle4.png'),
          "titulo":"Área Pix"
        },
        {
          "image":require('../assets/Vector3.png'),
          "titulo":"Pagar"
        },
        {
          "image":require('../assets/Rectangle8.png'),
          "titulo":"Transferir"
        },
        {
          "image":require('../assets/Rectangle9.png'),
          "titulo":"Depositar"
        },
        {
          "image":require('../assets/Rectangle10.png'),
          "titulo":"Recarga"
        },
        {
          "image":require('../assets/Vector4.png'),
          "titulo":"Cobrar"
        },
        {
          "image":require('../assets/Vector4.png'),
          "titulo":"Transferir Internac."
        },
  ]

  const mostrarSaldo = ()=>{
    if(!mostarSaldo){
      setMostrarSaldo(true);
      setImagemolho(require('../assets/OlhoAberto.png'));
      setSaldo('R$ 333.240,22');
    }else{
      setMostrarSaldo(false);
      setImagemolho(require('../assets/OlhoFechado.png'));
      setSaldo('');
    }
  };

  if(visibilidade){
    return(
      <View style={[estilos.viewprincipal, {backgroundColor:cor}]}>
        <StatusBar
          backgroundColor={'#8A19D6'}
        />

        <View style={estilos.cabecalhoView}>

          <View style={estilos.viewPerfilUsuario}>

            <View style={estilos.viewFotoUsuario}>
              <TouchableOpacity onPress={()=>mudarCor()}>
                <Image source={require('../assets/Group1.png')}/>
              </TouchableOpacity>
            </View>

            <View style={estilos.viewIcons}>
              <TouchableOpacity onPress={()=>{mostrarSaldo()}}>
                <Image source={imagemOlho}/>
              </TouchableOpacity>
              <TouchableOpacity >
                <Image source={require('../assets/ajuda.png')}/>
              </TouchableOpacity>
              <TouchableOpacity >
                <Image source={require('../assets/email.png')}/>
              </TouchableOpacity>
            </View>

          </View>

          <View style={estilos.viewNomeUsuario}>
            <Text style={estilos.textusuario}>Olá, Paulo Júnior</Text>
          </View>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={estilos.viewPrincipalCards}>

            <View style={estilos.viewSaldo}>
              <Text style={[estilos.textSaldo, {color:corTexto}]}>Conta</Text>
              <Text style={[mostarSaldo?estilos.textValorSaldoBranco:corTexto=='#ffff'?estilos.textValorSaldoBranco:estilos.textValorSaldo, {color:corTexto}]}>{saldo}</Text>
            </View>

            <View style={estilos.cardsServicos}>
              <ScrollView 
                style={estilos.cardsServicosScroll}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
              {
                list.map((item,index)=>{
                  return(
                    <ItemSevico
                      key={index}
                      listItemPropriedades={item}
                      cor={corTexto}
                    />
                  )
                })
              }
              </ScrollView>
            </View>
            
            <View style={estilos.viewCardCartoes}>
              <TouchableOpacity style={estilos.viewCardCartoes}>
                <Image source={require('../assets/Rectangle5.png')}/>
                <Text style={estilos.textCartoes}>Meus Cartões</Text>
              </TouchableOpacity>
            </View>

            <View style={estilos.viewCardsInformacoes}>
              <ScrollView style={estilos.viewScroll}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ItemListaInformacoes
                  listaItem={
                    {
                    "item1":"Seu ",
                    "item2":"informe de rendimentos", 
                    "item3":" 2021 está disponível"
                    }
                  }
                />
                <ItemListaInformacoes
                  listaItem={
                    {
                    "item1":"Seu ",
                    "item2":"informe de rendimentos", 
                    "item3":" 2021 está disponível"
                    }
                  }
                />
                
              </ScrollView>
            </View>

            <View style={estilos.linha}></View>

            <View style={estilos.solicitarCartao}>
                  <Image style={estilos.imagemCard} source={imagem}/>
                  <Text style={[estilos.textTituloCartao,, {color:corTexto}]}>Cartão de crédito</Text>
                  <Text style={[estilos.textTituloCartaoInform,{color:corTexto}]}>Peca seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.</Text>
                  <TouchableOpacity style={estilos.btnTouch}>
                    <Text style={estilos.btnText}>Pedir Cartão</Text>
                  </TouchableOpacity>
            </View>

            <View style={estilos.linha}></View>


              <View style={estilos.viewCardMaisServicos}>
                <Text style={[estilos.textCardMaisServicos, {color:corTexto}]}>Descubra mais</Text>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                >
                    <CardMaisServicos/>
                    <CardMaisServicos/>
                    <CardMaisServicos/>
                    <CardMaisServicos/>

                </ScrollView>
              </View>

          </View>
        </ScrollView>
      </View>
    )
  }else{
    return null;
  }
};

const estilos = StyleSheet.create({
  viewprincipal:{
    width:'100%',
    height:'100%',
  },
  cabecalhoView:{
    height:178,
    width:'100%',
    backgroundColor:'#8A19D6',
    alignItems:'center',
    justifyContent:'center',
    gap:30
  },
  viewPerfilUsuario:{
    width:'88%',
    height:48,
    flexDirection:'row',
    marginTop:30
  },
  viewFotoUsuario:{
    width:'50%',
  },
  viewIcons:{
    width:'50%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    gap:15
  },
  viewNomeUsuario:{
    width:'88%',
  },
  textusuario:{
    fontSize:18,
    color:'#fff',
    fontWeight:'600'
  },
  viewPrincipalCards:{
    width:'100%',
    alignItems:'center',
    gap:20
  },
  viewSaldo:{
    width:'88%',
    marginTop:15,
    gap:12,
  },
  textSaldo:{
    color:'black',
    fontSize:24,
    fontWeight:'500',
  },
  textValorSaldo:{
    backgroundColor:'#F0F1F5',
    width:'70%',
    height:38
  },
  textValorSaldoBranco:{
    color:'black',
    fontSize:32,
    fontWeight:'700',
    width:'70%',
    height:38,
  },
  cardsServicos:{
    width:'100%',
    height:120,
    flexDirection:'row',
    gap:20,
  },
    cardsServicosScroll:{
    height:'100%',
    gap:20
  },
  viewCardCartoes:{
    height:56,
    width:'88%',
    backgroundColor:'#F0F1F5',
    borderRadius:12,
    padding:10,
    alignItems:'center',
    gap:20,
    flexDirection:'row'
  },
  textCartoes:{
    color:'black',
    fontSize:14,
    fontWeight:'600'
  },
  viewCardsInformacoes:{
    width:'100%'
  },
  linha:{
    width:'100%',
    height:2,
    backgroundColor:'#F0F1F5'
  },
  solicitarCartao:{
    width:'88%',
    height:179,
    gap:15
  },
  textTituloCartao:{
    fontSize:24,
    fontWeight:'600'
  },
  textTituloCartaoInform:{
    fontSize:14,
    fontWeight:'500'
  },
  btnTouch:{
    width:139,
    height:46,
    backgroundColor:'#8A19D6',
    borderRadius:23,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText:{
    fontSize:16,
    fontWeight:'600',
    color:'#ffff'
  },
  viewCardMaisServicos:{
    width:'88%',
    marginBottom:10,
    gap:15
  },
  textCardMaisServicos:{
    color:'black',
    fontSize:18,
    fontWeight:'700',
    paddingLeft:10
  },
  imagemCard:{
    width:13,
    height:17
  }
});


export default Home;