import React from "react"; 
//깔려있는 module에서 가져옴
//import 사용할 이름 from module이름
import ReactDOM from "react-dom";
/*나중에 설명
import {HashRouter} from 'react-router-dom';
*/
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
//같은 src 폴더 안에 js 파일들을 가져다 쓰겠다.

ReactDOM.render( 
    //여기서만 사용.
    //다른 .js파일로는 class, component 만들어서 사용.
    /*
    <HashRouter>
        <Header/>
        <Body/>
        <Footer/>
    </HashRouter>
    안에 있는 것도 가져와서 함께 rendering
    하나로 싸져있어야 해서 일반적으론 div 태그 사용
    */
   document.querySelector("#container")
   //container라는 id를 가진 곳에 렌더링을 할 것 이다.
   //querySelector는 위치를 찾아주는 것.
)
