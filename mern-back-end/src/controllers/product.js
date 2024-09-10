const Product = require('../models/product')
const shortid = require('shortid')
const slugify = require('slugify')
const Category = require('../models/category')

exports.createProduct = (req, res) => {

    // res.status(200).json( {file: req.files, body: req.body} );

    const {
        name, price, specifications, description, shippingCost, category
    } = req.body;

    let productPictures = [];

    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }

    let slug = slugify(name);
    // console.log(name, slug)
    console.log(slug.length)
    if(slug.length == 0){
        console.log("Slug is 0");
        slug = name.split(" ")[0];
    }

    console.log(name, slug)

    const product = new Product({
        name: req.body.name,
        slug: slug,
        price,
        // quantity,
        specifications,
        description,
        shippingCost,
        productPictures,
        category,
        createBy: req.user._id
    });

    product.save().then(product => {
        if(product){
            res.status(201).json({ product });
        }
    }).catch((error) => {
        console.log(err);
        return res.status(400).json({ error })
        // res.send(400, "Bad Request");
    });
    
}

exports.getProductDetailsById = (req, res) => {
    const { productId } = req.params;
    // return res.status(200).json({ message: productId })
    if(productId){
        Product.findOne({ _id: productId })
        .then((product) => {
            // if(error) return res.status(400).json({ error });
            if(product){
                return res.status(200).json({ product });
            }
        }).catch((error) => {
            console.log(err);
            return res.status(400).json({ error })
        })
    }else{
        return res.status(400).json({ error: 'params required' });
    }
}

// exports.getProductsBySlug = (req, res) => {
//     const { slug } = req.params;
//     Category.findOne({ slug: slug })
//         .select('_id')
//         .then(category => {
//             if(category){
//                 Product.find({ category: category._id })
//                     .then(products => {
//                         if(products.length > 0){
//                             res.status(200).json({
//                             products,
//                             productByPrice: {
//                                 under5k: products.filter(product => product.price <= 5000),
//                                 under10k: products.filter(product => product.price > 5000 && product.price <=10000),
//                                 under15k: products.filter(product => product.price > 10000) 
//                                 }
//                             })
//                         }else{
//                             res.status(200).json({ message: 'no' })
//                         }
//                     }).catch((error) => {
//                         return res.status(400).json({error})
//                     })
//             }
//         }).catch((error) => {
//             return res.status(400).json({error})
//         })
// }


