import CertificadoService from "../services/CertificadoService";


class CertificadoController { 

  static getItem(req, res) {               
    CertificadoService.getItem(req.params.id)
        .then((data) => {                                                                          
          res.status(200).send({message:"certificados lista", result: data });            
        })                   
        .catch((reason) => {  
          console.log(reason)            
          res.status(400).send({ message: reason });
        });         
  }
  static getData(req, res) {               
    CertificadoService.getData(req.params.pagina,req.params.num,req.params.prop,req.params.orden)
        .then((data) => {                                                                          
          res.status(200).send({message:"certificados lista", result: data });            
        })                   
        .catch((reason) => {  
          console.log(reason)            
          res.status(400).send({ message: reason });
        });         
  }
  static crear(req, res) {               
    const { alumnoId } = req.body
    CertificadoService.setAdd(req.body)
      .then((xdato)=>{
          CertificadoService.getData(1,15,alumnoId,alumnoId)
          .then((data) => {                                                                          
            res.status(200).send({message:"certificados lista", result: data });            
          })                   
          .catch((reason) => {  
            console.log(reason)            
            res.status(400).send({ message: reason });
          });         
      })
      .catch((reason) => {  
        console.log(reason)            
        res.status(400).send({ message: reason });
      });
  }
  static actualizar(req, res) {               
    const { alumnoId } = req.body
    CertificadoService.setUpdate(req.body,req.params.id)
      .then((xdato)=>{
          CertificadoService.getData(1,15,alumnoId,alumnoId)
          .then((data) => {                                                                          
            res.status(200).send({message:"certificados lista", result: data });            
          })                   
          .catch((reason) => {  
            console.log(reason)            
            res.status(400).send({ message: reason });
          });         
      })
      .catch((reason) => {  
        console.log(reason)            
        res.status(400).send({ message: reason });
      });
  }
 





}


export default CertificadoController;