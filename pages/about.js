import React,{Component} from "react";
import Image from 'next/image'

class About extends Component{
    render(){
       return  <div className="image">
            
            <Image src="/somesh.jpg" width='400' height='350' ></Image>
            <div style={{marginTop:20}}>
            <text style={{fontSize:25}}>Hi, Myself <b>Somesh Bangad</b></text>
            </div>
            
            <div>
                <text style={{fontSize:25}}> <b>Java Developer</b></text>
            </div>

        </div>
    }
}

export default About;