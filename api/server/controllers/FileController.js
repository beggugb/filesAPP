import FileService from "../services/FileService";
import AlumnoService from "../services/AlumnoService";
import CertificadoService from "../services/CertificadoService";

class FileController {  
    
  static foto(req, res) {
        FileService.foto(req, res)
          .then((file) => {
            const art = {}
            art.filename = file.filename
            AlumnoService.setUpdate(art, req.params.id)
              .then((result) => {
                    res.status(200).send({ result })
                  })
          })
          .catch(reason => {
            console.log(reason)
            res.status(400).send({ 'message': reason })
          })   
  }
  static carnet(req, res) {
    FileService.carnet(req, res)
      .then((file) => {
        const art = {}
        art.fci = file.filename
        AlumnoService.setUpdate(art, req.params.id)
          .then((result) => {
                res.status(200).send({ result })
              })
      })
      .catch(reason => {
        console.log(reason)
        res.status(400).send({ 'message': reason })
      })   
}    
static bachiller(req, res) {
  FileService.bachiller(req, res)
    .then((file) => {
      const art = {}
      art.fbachiller = file.filename
      AlumnoService.setUpdate(art, req.params.id)
        .then((result) => {
              res.status(200).send({ result })
            })
    })
    .catch(reason => {
      console.log(reason)
      res.status(400).send({ 'message': reason })
    })   
} 
static egreso(req, res) {
  FileService.egreso(req, res)
    .then((file) => {
      const art = {}
      art.fegreso = file.filename
      AlumnoService.setUpdate(art, req.params.id)
        .then((result) => {
              res.status(200).send({ result })
            })
    })
    .catch(reason => {
      console.log(reason)
      res.status(400).send({ 'message': reason })
    })   
} 

static licenciatura(req, res) {
  FileService.licenciatura(req, res)
    .then((file) => {
      const art = {}
      art.flicenciatura = file.filename
      AlumnoService.setUpdate(art, req.params.id)
        .then((result) => {
              res.status(200).send({ result })
            })
    })
    .catch(reason => {
      console.log(reason)
      res.status(400).send({ 'message': reason })
    })   
} 
static certificado(req, res) {
  FileService.certificado(req, res)
    .then((file) => {
      const art = {}
      art.filename = file.filename
      CertificadoService.setUpdate(art, req.params.id)
        .then((result) => {
              res.status(200).send({ result })
            })
    })
    .catch(reason => {
      console.log(reason)
      res.status(400).send({ 'message': reason })
    })   
} 
    
}

export default FileController;
