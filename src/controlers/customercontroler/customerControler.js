

let customerLogic =   (req,res)=>{

    let customerData = {
        orderid :"10",
        ordername: "PIZZA"
    }
        res.status(200).json({customerData})
    
    }


    exports.customercontroler =customerLogic;