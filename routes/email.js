const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/', async(req, res) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {

            user: 'nukhba.shops@gmail.com',
            pass: 'ahvbfisxkhyfbxjo'


        }
    })


    // user: 'ashar.a.hmd11@gmail.com',
    // pass: 'skfyglracnfckxca'
    // user: 'nukhba.shops@gmail.com',
    // pass: 'ahvbfisxkhyfbxjo'


    const mailOption = {
        from: "nukhba.shops@gmail.com",
        to: req.body.email,
        subject: "Nukhba Order Confirmation",
        html: `<div style='background-color:#000000;padding:30px'>
        <img src='https://nukhba.shop/static/media/nukhbaLogo.27e48779.png'/>
        <h1 style='color:#F4B92F;text-align:center;'\>Thanks For shopping ${req.body.name}</h1>
        \n<h3 style='padding:10px;color:#A38235'>${req.body.name} your order has been confirmed, for further query please contact us on our whatsapp.</h3>
        \n<h2 style='color:#F4B92F;text-align:center;text-decoration:underline;'>Order Summary</h2>\n
        <table style='border:1px solid #F4B92F;padding:10px'>
       
        <tr>
        <th style="border-right:1px solid #F4B92F;border-bottom:1px solid #F4B92F;"><p style="color:#F4B92F;text-align:start;">Products</p></th>
        <th style="border-bottom:1px solid #F4B92F;"><p style="color:#F4B92F;text-align:end;padding-left:10px;">Total</p></th>
        </tr>
    
    
        <tr>
        <td  style="border-right:1px solid #F4B92F;"><p style="color:#F4B92F;text-align:start;padding-right:10px;">${req.body.products}</p></td>
        <td><p style="color:#F4B92F;text-align:end;padding-left:10px;">${req.body.total}</p></td>
        </tr>
        <tr>
        <tr>
        <td  style="border-right:1px solid #F4B92F;"><p style="color:#F4B92F;text-align:start;padding-right:10px;">Delivery Charges</p></td>
        <td><p style="color:#F4B92F;text-align:end;padding-left:10px;">Rs250.00</p></td>
        </tr>
        <tr>
        <th  style="border-right:1px solid #F4B92F;"><p style="color:#F4B92F;text-align:start;padding-right:10px;">Subtotal incl. Delivery Charges</p></th>
        <th><p style="color:#F4B92F;text-align:end;padding-left:10px;">${req.body.subtotal}</p></th>
        </tr>
    
        </table>
        </div>`
    }

    transport.sendMail(mailOption, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log("Email Sent" + info.response)
        }
    })


})


module.exports = router