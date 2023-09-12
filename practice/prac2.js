import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";
// const heading=ce
// (
//     "h1",
//     {
//         id:"title",
//         key:"h1"
//     },
//     "Heading 1"
// );
const title=<h1 id="title" key="h2">FoodCorner</h1>

//functional Component
//Name of the component starts with capital letter although not mandatory but a good practice and convention 
var abc=10; //we can write any piece of javacript code in jsx using curly braces {}
const HeaderComponent=()=>{
return (
<div>
{title}
{abc}
{"\n"} 
{1+2}
<HeaderComponent2/> 
{HeaderComponent2( )}
<h1>Heyy functinal component</h1>
<h2>It's h2 heading inside div component</h2>
</div>
);
};

const HeaderComponent2=()=>
(
    <div>
    <h1>Heyy component 2</h1>
    <h2>rendering this component inside our headercomponent1</h2>
    </div>
);

const HeaderComponent3=function(){
    return (
    <div>
    <h1>Heyy functinal component</h1>
    <h2>It's h2 heading inside div component</h2>
    </div>
    );
    };
//all codes of HeaderComponent, HeaderComponent2 and HeaderComponent3 are same. 

//this izz jsx - line 14
const heading2=<h3 id="title" key="h3">New Heading h3</h3>


const root=ReactDOM.createRoot(document.getElementById("root"));
//   // when i have to render react element then we write like this
root.render(<HeaderComponent/>) // when i have to render react component  then we write like this