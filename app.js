/**
 * 
 * lets mention some advantges that differ axios from the built in approach fetch 
 *  the only con is that axios is not built in it needs to be installed, other than that axios 
 *      handle errors
 *      converts json data automatically   
 *          so this is the usual fetch method code , you convert the data manually 
 * 
 *        fetch("you link to the api")
 *          .then(res => res.json())
 *          .then(data => console.log(data));
 * 
 * 
 * 
 *              in axios : axios.get("you link to the api")
 *                              .then(data => console.log(data));
 */

// const { default: axios } = require("axios");













//synchronous approach //asynchronous approach (happens without blocking the code from running)
// console.log('start');
// setTimeout(() => console.log('middle'), 500); //to prove the asynchronous , we used set timeout to prove the the code wont stop running while waiting for the timeout to end
// console.log('end');

// //when you put a function to async , it automatically returns Promises n we use it usually for things that will take time like fetching data 
// async function fetchData(){
//     return "Hello";
// }

// fetchData().then(console.log); // It will prints Hello , because its a callback for what fetchdata function will return 
//then come the role of the await, it pauses the async function until the promise is resolved , example: 
// async function getData() {
//   const controller = new AbortController();
//   const timeout = setTimeout(() => controller.abort(), 5000); // 5s timeout

//   try {
//     const response = await fetch('https://api.slowapi.com/data', { signal: controller.signal });
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     if (err.name === 'AbortError') {
//       console.log('Request took too long and was aborted');
//     } else {
//       console.error('Fetch failed:', err);
//     }
//   } finally {
//     clearTimeout(timeout);
//   }
// }









//GET

// axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res.data);
//         console.log('success');
//     })
//     .catch(error => {
//         console.log(error);
//         console.log('error');

//     }
//     )
//POST
    // const newUser = {
    //     name: 'ali',
    //     client: 'true'
    // }

    // axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    //     .then(res => {
    //         console.log(res.data);
    //         console.log('success');
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         console.log('error');

    //     }
    //     )
//PUT

    // const newUser1 = {
    //     name: 'Moali',
    //     client: 'true'
    // }

    // axios.put("https://jsonplaceholder.typicode.com/users/1", newUser1)
    //     .then(res => {
    //         console.log(res.data);
    //         console.log('success');
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         console.log('error');

    //     }
    //     )


//DELETE
      axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then(res => {
            console.log(res.data);
            console.log('success');
        })
        .catch(error => {
            console.log(error);
            console.log('error');

        }
        )