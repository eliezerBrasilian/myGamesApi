import {useState,useEffect} from 'react';
import {Text, FlatList,View,Image} from 'react-native'
import axios from 'axios';
const App =()=>{
  const [gamesList,setGamesList] = useState([])
  useEffect(()=>{
    async function getGames(){
      await axios.get('http://192.168.100.31:3000/games')
              .then(response => setGamesList(response.data))
              .catch(err => console.log(err));
    }
    getGames()

  },[])
  
  return(<View style={{flex:1,backgroundColor:'#000'}}>
    <FlatList 
    data={gamesList} 
    renderItem = {({item}) => <Games dados={item}/> }
    />
  </View>)

function Games({dados}){
  
  return(
    <View style={{rowGap:15}}>
      <Image source={{uri:dados.frame}} style={{height:400}} resizeMode='contain'/>
      <Text style={{fontSize:30}}>{dados.title}</Text>
    </View>
      
  )
}
}



export default App;