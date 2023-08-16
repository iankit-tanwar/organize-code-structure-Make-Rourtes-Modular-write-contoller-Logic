


let adminLogic = (req,res)=>{

    let adminData = {
      name : "ankit",
      surname : "tanwar"
    }
      res.status(200).json({adminData})
  
  }


  //exprots


  exports.adminControler = adminLogic;