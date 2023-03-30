  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        
        }
    })

    const mailOptions = {
        from: 'esen.mukanova03@mail.ru',
        to: 'esen.mukanova03@mail.ru',
        subject: 'Portfolio',
        text: `First name: ${firstname}, \nLast name: ${lastname}, 
        \nEmail: ${email}, \nMessage: ${msg}`
    }
    
    transporter.sendMail(mailOptions, (err, result) => {
        if (err){
        console.log(err)
            res.json('Opps error occured')
        } else{
            res.json('thanks for e-mailing me');
        }
    })


app.listen('3000', () => {
    console.log('listening....');
})

