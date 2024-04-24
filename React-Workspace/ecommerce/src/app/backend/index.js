const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const razorpay = require('razorpay')
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const instance = new razorpay({ key_id: 'rzp_test_Vs8DfXRxAz1dvF', key_secret: 'p8jZqPyvi1LbOZirGmP1Ydm1' });

const corOptions = {
    origin: 'http://localhost:3000',
    method: ["GET,POST,PUT,DELETE"],
    credentials: true
}

mongoose.connect("mongodb://localhost:27017", {
    dbName: "ecommerce"
}).then(() => {
    console.log("Database Connected")
}).catch(e => {
    console.log(e);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

let users = mongoose.model("users", userSchema)
let products = mongoose.model("products", productSchema)

app.get('/', (req, res) => {
    res.send("Hello! Master Wayne")

})

app.post('/payment', (req, res) => {
    const {amount} = req.query;
    const amountValue = parseInt(amount)
    console.log(typeof(amountValue));
    console.log(amountValue);
    const options = {
        amount: amountValue*100, // amount in the smallest currency unit
        currency: 'INR',
        receipt: 'surajkumarjha747@gmail.com' //Unique identifier for the payment
    };

    instance.orders.create(options, function (err, order) {
        if (err) {
            console.error('Error creating Razorpay order:', err);
            return res.status(500).send('Error creating Razorpay order');
        }
        console.log('Razorpay order created:', order);
        res.json(order);
    });
});

app.post("/signup", async (req, res) => {
    try {
        let { name, email, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10)
        password = hashPassword
        const existingUser = await users.findOne({ email })
        let userdata = new users({ name, email, password });
        if (!existingUser) {
            await userdata.save()
                .then(console.log(name + " saved to database"))
                .catch(e => {
                    console.log(e);
                })
            res.status(200).json({
                message: req.body
            })
        }
        else {
            res.status(502).json({
                message: "User is already Registered"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

app.post("/createproduct", async (req, res) => {
    try {
        const { productName, category, price } = req.body;
        let product = new products(req.body)
        await product.save()
            .then(
                console.log(productName + " product created")
            )
            .catch(
                e => { console.log(e) }
            )

        res.status(200).json({
            message: "Product Created"
        })
    } catch (error) {
        res.status(502).json({
            message: "Product Not Created"
        })
    }
})

app.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await users.findOne({ email })

        if (user) {
            let decodedPassword = await bcrypt.compare(password, user.password)
            
            if (decodedPassword) {
                let token = jwt.sign({ Userid: user._id }, 'surajkumarjhaisthegreatestofalltimerichestpersoninworld', { expiresIn: 120000 })
                res.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 60000
                }),
                    res.status(200).json({
                        message: "User Found",
                        token
                    })
            }
            else {
                res.status(401).json({
                    message: "Incorrect Password",
                })
            }
        } else {
            res.status(404).json({
                message: "User Not Found",
            })
        }

        app.get('/verify',(req,res) => {
            let tkn = req.cookies.token;
            console.log(tkn);
            let jwtVerify = jwt.verify(token,'surajkumarjhaisthegreatestofalltimerichestpersoninworld')
            console.log(jwtVerify);
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

app.listen(4000, () => {
    console.log("Server is Working! Master Wayne");
})