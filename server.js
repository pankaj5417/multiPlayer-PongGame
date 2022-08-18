const server=require('http').createServer();
const io=require('socket.io')(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})

const PORT=4000;

server.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}...`);

});
