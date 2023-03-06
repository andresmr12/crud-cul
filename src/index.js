const app=require('./app')

const host="localhost";
// const port=8000;

// app.use((req,res)=>{
//     res.status(404).send("Error 404")
// })
// app.listen(port,host, ()=>{
//     console.log(`el link de acc es http://${host}:${port}`);
// })

async function main(){
    await app.listen(app.get('port'));
    console.log(`el link de acc es http://${host}:${app.get('port')}`);
}

main();