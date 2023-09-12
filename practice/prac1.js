import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";
const heading=ce
(
    "h1",
    {
        id:"title",
        key:"h1"
    },
    "Heading 1"
);
const heading2=ce
(
    "h2",
    {
        id:"title",
        key:"h2"
    },
    "Heading 2"
);

//To write below code in react
{/* <div class="header">
    <h1>Namaste React</h1>
    <ul>
        <li>About Us</li>
        <li>Support</li>
        <li>Home</li>
    </ul>
</div> */}


// const container=React.createElement
// (
//     "div",
//     {
//         id:"container",
//         hello:"world",
//     },
//     [React.createElement
//         (
//             "h1",
//             {
//                 id:"title",
//                 key:"h1"
//             },
//             "Heading 1"
//         ),
//         React.createElement
//         (
//             "ul",
//             {},
//             [React.createElement
//                 (
//                     "li",
//                     {},
//                     " About Us "
//                 ),
//                 React.createElement
//                 (
//                     "li",
//                     {},
//                     "Heading 2"
//                 ),
//                 React.createElement
//                 (
//                     "li",
//                     {},
//                     "Heading 2"
//                 )]
//         )]
// );

const container=ce
(
    "div",
    {
        id:"container",
        hello:"world",
    },
    [heading,heading2]
);


console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 