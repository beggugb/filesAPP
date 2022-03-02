import database from "../../src/models";

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const sharp = require("sharp");
const multer = require('multer');
const uuidv4 = require('uuid');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'api/public/images/trash')
    },
    filename: function (req, file, cb) {
  
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
var upload = multer({ storage: storage }).single('file')

class FilesService {

  static foto(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/foto/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/foto/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/foto/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }
  
  static carnet(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/carnet/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/carnet/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/carnet/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }
  static bachiller(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/bachiller/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/bachiller/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/bachiller/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }
  static egreso(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/egreso/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/egreso/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/egreso/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }

  static licenciatura(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/licenciatura/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/licenciatura/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/licenciatura/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }
  static certificado(req,res) {         
    return new Promise((resolve, reject) => {
        upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            resolve(err)
          } else if (err) {
            resolve(err)
          }
          sharp(req.file.path).resize({ height: 300 }).toFile('./api/public/images/certificados/lg/' + req.file.filename);
          sharp(req.file.path).resize({ height: 150 }).toFile('./api/public/images/certificados/md/' + req.file.filename);
          sharp(req.file.path).resize({ height: 75 }).toFile('./api/public/images/certificados/sm/' + req.file.filename);
          resolve(req.file)
        })
      })
  }

 
 

 
}

export default FilesService;

