import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TicTac = () => {

    const [array, setArray] = useState([ 
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])
    const [check, setCheck] = useState(false);
    const [scoreX, setscoreX] = useState(0);
    const [scoreO, setscoreO] = useState(0);

    const styleBox = {
        borderColor:"black",
        borderWidth:1,
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    }

    const onHandle = (a, b) =>{
        let newArray = array;
        if(array[a][b] === ""){
            newArray.map((item, index1) =>
                item.map((subItem, index2)=>
                    {
                        if(index1 === a && index2 === b){
                            newArray[index1][index2] = !check
                        }
                        else{
                            newArray[index1][index2] = newArray[index1][index2]
                        }
                    }
                )
            )   
            setCheck(!check)
            setArray(newArray)
            onHandleControl( a, b)
        }
    }

    const onHandleControl = ( a, b) =>{
        let control1 = array[a][0] !== "" && array[a][1] !== "" && array[a][2] !== ""
        let control2 = array[a][0] === array[a][1] === array[a][2] === array[a][b]
        let control3 = array[0][b] === array[1][b] === array[2][b] === array[a][b]
        let control4 = array[0][b] !== "" && array[1][b] !== "" && array[2][b] !== "" 
        let control5 = (array[0][0] === array[1][1] === array[2][2]) && (a===b)
        let control6 = array[0][0] !== "" && array[1][1] !== "" && array[2][2] !== "" 
        let control7 = (array[0][2] === array[1][1] === array[2][0] === array[a][b]) && (a === b || a - b === 2 || b - a === 2)
        let control8 = array[0][2] !== "" && array[1][1] !== "" && array[2][0] !== "" 

        if(control1 === true && control2 === true){
            counterScore(a,b)
        }
        else if(control4 === true && control3 === true){
            counterScore(a,b)
        }
        else if(control5 === true && control6 === true){
            counterScore(a,b)

        }
        else if(control7 === true && control8 === true){
            counterScore(a,b)
        }
    } 

    const counterScore = (a,b) =>{
        if(array[a][b] === false ){
            setscoreX(scoreX + 1)
            setCheck(false)
            onEmpty()
        }
        if(array[a][b] === true ){
            setscoreO(scoreO + 1)
            setCheck(false)
            onEmpty()
        }
    }

   (scoreX === 5 || scoreO === 5) &&  alert(scoreX > scoreO ? "X Kazandı" : ( scoreO === scoreX ? "Berabere bitti" : "O Kazandı") )

    return (
      <View>
        <Text style={{fontSize:20}} >
            X : {scoreX}
        </Text>
        <Text style={{fontSize:20}}>
            O : {scoreO}
        </Text>
        {
            array.map((item, index)=>(
                <View style={{
                    flexDirection:'row',
                  
                }} >
                    {
                        item.map((subItem, index2) =>(
                           <TouchableOpacity
                            style={styleBox}
                            onPress={()=>onHandle(index, index2)}
                           >
                               <Text style = {{fontSize:40}} >
                                   {subItem === false && "X"}
                                   {subItem === true && "O"}
                                   {subItem === "" && ""}
                               </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            ))
        }
      </View>
    );
}

export default TicTac