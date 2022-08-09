import React, { useState, useEffect,useContext } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,ScrollView,
  Alert,StyleSheet,TextInput,
  ImageBackground,
  View,
  Pressable,RefreshControl,
} from 'react-native';
 

 
 
 
 
 
 
   
 import { Dimensions } from 'react-native';
 


export default function AlphabetScrollScreen({ navigation}) {
  
const [loading, is_loading] = useState(false);
const [best_offers, set_best_offers] = useState([]);

  const [visible, setVisible] = React.useState(false);
  const [search_result, set_search_result] = useState([]);
   const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};


  StatusBar.setBarStyle('dark-content');
  let date=new Date();
 

 const  the_date = (back_date) =>{
    let title=back_date
 let back_date2=[...back_date.split("-")]
   if(date.getMonth()+1==back_date2[1]&&date.getFullYear()==back_date2[0] ){

    if(date.getDate()-1==parseInt(back_date2[2],10) ){
title="امس "  
    }
    if(date.getDate()==back_date2[2] ){
title="اليوم " 
    }




    

   

  }
   
 
return title
}
  
function Product({ product }) {


















  return (
    <Pressable style={{width:"48%"}} onPress={()=>{navigation.navigate("Details",{id_offer:product.id_offer})}}
     
    unstable_pressDelay={0}
  
    >


      <View
      
      style={{
        
        padding:5,
        flexDirection:"column",
        marginRight:5,
        direction:"rtl",
        backgroundColor: '#ffffff',
       
        marginTop: 10,elevation:20,
        borderRadius:20,
        paddingVertical: 10,
        width:"100%",height:"auto",alignContent:"center" ,alignSelf:"center",shadowColor:"black",justifyContent:"center",alignItems:"center"        
        
      }}
    > 
         {/* Product Image View */}
           <Image
            style={{ height:280,width:"100%", resizeMode:"cover",borderRadius:10 }}
            source={{ uri: product.photos.split(",")[0] }}          />
            
         {/* Product Details View */}
        

       
     
      {/* Offer View */}
       
      {/* Specifications Wrap */}
      <View
        style={{
          
           
     flexDirection:"column",
          width:"100%",
           
        }}
      >
        <View style={{ flexDirection:"column" ,marginTop:10 }}>
              
                
                
              
              <Text style={{textAlign:"center",fontSize:20}} >

                  {product.product}
              </Text>
            </View>
            {/******************************************************************************************************************************************************** */}
           
            {/******************************************************************************************************************************************************** */}
               
           <View style={{flexDirection:"row",width:"50%",alignContent:"center",alignSelf:"center",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{textAlign:"center",fontSize:13,fontWeight:"600"}} >{product.province}</Text><Entypo name="location" size={15} color="orange" />

            </View>
            
           
        
            {/******************************************************************************************************************************************************** */}
        
            {/******************************************************************************************************************************************************** */}
  
            {/******************************************************************************************************************************************************** */}
 
            
            
            
        
        
      </View>


     
















    </View>
    </Pressable>
    
  );
}
 

const [selectedLanguage, setSelectedLanguage] = useState();
  
 

  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState([]);
  const [isfocus, setIsfocus] = useState(false);
  const [max_price, set_max_price] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);
 
  const [wilaya, set_wilaya] = useState("");

  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshing_page,set_refreshing_page]=React.useState(false);
    const onRefresh = () => {
      setRefreshing(true);
      getting_list_of_product()
      getting_best_offers()
      set_refreshing_page(!refreshing_page)
      setRefreshing(false)
    };
   
   
 
     
  useEffect(() => {
    
  

       async function getting_list_of_product(){
          is_loading(true)

const data ={id:"all"}
        const response = await fetch("https://hello-app-final.herokuapp.com/list_of_product",{
            method:"POST",
            body:JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        
          })
        const result = await response.json()
        
        setFilteredUsers(result.reverse());
        
      
navigation.setOptions({headerTitle:"المتجر الفلاحي"

    ,headerShown:true,
  headerStyle: {
    
    backgroundColor: '#A97619',
   
    
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    textAlign:"center",
    alignSelf: 'center',fontFamily: 'Montserrat'
    
    
  
  },
  headerTitleAlign: 'center' });

     
    }


    async function getting_best_offers(){
      
          
      const response = await fetch("https://hello-app-final.herokuapp.com/best_offers",{
         method:"GET",
       
         headers: {"Content-Type": "application/json"}
     
       })
     const result = await response.json()
     

console.log(result)
                  set_best_offers(result.reverse())
                  

                  is_loading(false)
 }




   getting_list_of_product()

  getting_best_offers()







     
      
     
     
    

    
  }, []);

  async function getting_best_offers(){
      
          
    const response = await fetch("https://hello-app-final.herokuapp.com/best_offers",{
       method:"GET",
     
       headers: {"Content-Type": "application/json"}
   
     })
   const result = await response.json()
   

console.log(result)
                set_best_offers(result.reverse())
                

 } 
async function searching(searchText,wilaya,max_price){
  const data = {id:"all",name:searchText,wilaya:wilaya,max_price:max_price} 
        const response = await fetch("https://hello-app-final.herokuapp.com/list_of_product_search",{
            method:"POST",
            body:JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        
          })
        const result = await response.json()
        
        
        setFilteredUsers(result.reverse());
        console.log(result)
}

async function getting_list_of_product(){
const data =  {id:"all"}
const response = await fetch("https://hello-app-final.herokuapp.com/list_of_product",{
    method:"POST",
    body:JSON.stringify(data),
    headers: {"Content-Type": "application/json"}

  })
const result = await response.json()


setFilteredUsers(result.reverse());
console.log(result)


}
    

 
    


 return (   /*
    
    <View style={{ flex: 1, paddingVertical: 10,padding:10 }}>
        <ScrollView>
        {Array(1)
          .fill(1)
          .map(() =>
          users.map((product) => (
             <Product product={product} />
            ))
          )}
      </ScrollView>
      
    </View>*/




   <View  style={styles.container}    >
   


 

  


 



    



  
      <View style={{ flex: 1, paddingTop: 0 }}>
      

        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
           
              defaultValue={searchText}
              style={styles.input}
              placeholder='البحث'
              
              onChangeText={(text) => {
                setSearchText(text);
                if (text === "") {
                   getting_list_of_product()
                   
                 
                }
                searching(text,wilaya,max_price)
               
              }}
              returnKeyType='search'
            />
            
            
            
            
              <TouchableOpacity>
               </TouchableOpacity>
       
              
           
          </View>
          
        </View>
       <View style={{backgroundColor:"black",width:"100%",flexDirection:"row-reverse"}}>
  

<Text style={{color:"white",alignContent:"center",alignItems:"center",justifyContent:"center",alignSelf:"center"}}>السعر الاعلى</Text>
<TextInput
           
           defaultValue={max_price}
           style={{backgroundColor:"white",alignContent:"center",alignItems:"center",justifyContent:"center",alignSelf:"center",width:150}}
           placeholder='السعر بالدينار'
           
           onChangeText={(text) => {  searching(searchText,wilaya,text)
                          set_max_price(text);

           

          
              
            
           }}
keyboardType="decimal-pad"         />
         
















          </View>











        { filteredUsers.length <=0&&searchText.length!=0  ? (





              


          <View style={{ alignContent:"center",alignItems:"center",alignSelf:"center"  ,flexDirection:"column"}}>



              <Text style={{alignContent:"center",textAlign:"center",color:"gray",textAlignVertical:"center", fontSize:40, flex:1,flexDirection:"column"}}>


لا توجد نتائج

<Foundation name="page-search" size={40} color="gray" />
           </Text>
          </View>
         
        
     
        ) : (
          
          filteredUsers.length >0&&searchText.length!=0  ?(<ScrollView         refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
      <View style={{flexWrap:"wrap",flexDirection:"row",width:"100%",justifyContent:"space-evenly",alignContent:"flex-end",alignSelf:"flex-start"}}>
          {Array(1)
            .fill(1)
            .map(() =>
            filteredUsers.map((product) => (
               <Product product={product} />
              ))
            )}</View>
        </ScrollView>):(

<ScrollView       refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        } >
          

      <Text style={{margin:30,textAlign:"center",color:"white",fontSize:20,fontFamily:"Montserrat",backgroundColor:"orange",borderRadius:20,alignContent:"center",alignSelf:"center",alignItems:"center",width:"100%"}}>افضل العروض الرائجة</Text>
       <Text style={{margin:30,textAlign:"center",color:"white",fontSize:20,backgroundColor:"orange",fontFamily:"Montserrat",borderRadius:20,alignContent:"center",alignSelf:"center",alignItems:"center",width:"100%"}}>احدث العروض</Text>
<View style={{flexWrap:"wrap",flexDirection:"row",width:Dimensions.get("window").width,justifyContent:"space-evenly",alignContent:"flex-end",alignSelf:"flex-start"}}>
          {Array(1)
            .fill(1)
            .map(() =>
            filteredUsers.map((product) => (
               <Product product={product} />
              ))
            )}</View>
        </ScrollView>


        )
          

       
        )}
       
      </View>
    
    
 
    </View>


   






  );

  }

  

  
  const styles = StyleSheet.create({
    container: {
      backgroundColor:"#ffffff",
      flex: 1,
      
     },
    searchView: {
      display: 'flex',
      flexDirection: 'row',
    },
    inputView: {
      flex: 1,
      height: 40,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      borderRadius: 6,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 18,
    },
    userCard: {
      backgroundColor: '#fafafa',
      paddingVertical: 6,
      paddingHorizontal: 6,
      borderRadius: 10,
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userImage: {
      width: 40,
      height: 40,
      borderRadius: 100,
    },
    userCardRight: {
      paddingHorizontal: 10,
    },
    messageBox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    messageBoxText: {
      fontSize: 20,
      fontWeight: '500',
    },
  });