const {Router}=require('express');
const router=Router();
const fs=require('fs');


//vamos hacer un areglo para almacenar
const leerJson=fs.readFileSync('src/producto.json','utf-8')
let producto=JSON.parse(leerJson);



router.get('/',(req,res)=>{
    res.render('index.ejs',{producto})
});


router.get('/new-entry',(req,res)=>{
    res.render('new-entry')
});

router.post('/new-entry',(req,res)=>{
    // console.log(req.body);
    const {id, nombre, precio}=req.body;
    if(!id || !nombre || !precio){
        res.status(400).send("Debe rellenar todos los datos para guardar");
        return;
    }
    let newProducto={
        id,
        nombre,
        precio
    };

    
    producto.push(newProducto);
    const json_producto =JSON.stringify(producto);
    fs.writeFileSync('src/producto.json',json_producto,'utf-8')
    // console.log(producto);
    res.redirect('/')
})


router.get('/delete/:id',(req,res)=>{
    // console.log(req.params);
    // res.send("resivido")

    producto=producto.filter(elemento=>elemento.id != req.params.id)
    const json_producto =JSON.stringify(producto);

    fs.writeFileSync('src/producto.json',json_producto,'utf-8')
    // console.log(producto)
    res.redirect('/');
    
})



router.get('/editar/:id',(req,res)=>{
    let productos=producto.filter(elemento=>elemento.id === req.params.id);
    res.render('new-editar',{productos})
    
})




router.post('/editar',(req,res)=>{
    const {id, nombre, precio}=req.body;
    

    if(!id || !nombre || !precio){
        res.status(400).send("Debe rellenar todos los datos para guardar");
        return
    }
        let productos=producto.find(elemento=>elemento.id === id);
        productos.nombre=nombre;
        productos.precio=precio;

    const json_producto =JSON.stringify(producto);
    fs.writeFileSync('src/producto.json',json_producto,'utf-8')
    // console.log(producto);
    res.redirect('/')
})

router.get('/verdetalle/:id',(req,res)=>{
    let productos=producto.filter(elemento=>elemento.id === req.params.id);
    res.render('ver-detalle',{productos})
});




module.exports =router;