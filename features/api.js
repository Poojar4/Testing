// let x={
//          "name":"pooja",
//          "place":"Bangaluru"
//      }
//     console.log(x.name);
    // const URL = "https://reqres.in/api/users?page=2"
    
    // const getUsers = async () => {
    // let promise = await fetch(URL)
    // console.log(promise);
    // }

    // displaying Plain text or HTML
    import fetch from "node-fetch";
//    const response = await fetch('https://github.com/');
//    const body = await response.text();
//    console.log(body);

// displaying entire json data
// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();
// console.log(data);

// Simple Post
// const response = await fetch("https://httpbin.org/post",{method:'POST',body:"pooja"});
// const data = await response.json();
// console.log(data);

//Post with JSON
// const name = "pooja";
// const body = {name};
// const response = await fetch('https://httpbin.org/post',{
//     method:'POST',
//     body:JSON.stringify(body),
//     headers:{'Content-Type':'application/json'} // Indicates that the body content is JSON
// });
// const data = await response.json();
// console.log(data);


// import fetch from 'node-fetch';

const params = new URLSearchParams();
params.append('a', 1);

const response = await fetch('https://httpbin.org/post', {method: 'POST', body: params});
const data = await response.json();

console.log(data);

//URLSearchParams is used to create query parameters. In this case, it appends a parameter a with the value 1.





