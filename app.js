/*const fakeYou = require("fakeyou.js");
const fy = new fakeYou.Client({
    usernameOrEmail: 'fco.garcia.solis@gmail.com',
    password: 'l2dcqal:fy'
});*/

const loadRequest = async() => {
    try{
        const resp = await fetch("curl -X GET https://api.fakeyou.com/category/list/tts");
        console.log(resp);
    } catch(error){
        console.log(error);
    }
    /*await fy.start();

    const audio = await fy.makeTTS('auronplay', 'Me tienen llorando por la tristeza xd');
    const url = 'https://storage.googleapis.com/vocodes-public' + audio.audioPath;
    console.log(url);*/
}

loadRequest();