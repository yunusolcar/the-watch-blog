const db = require("../models/database");


exports.getCreatePost = async (req, res) => {
     const title = req.body.title;
     const description = req.body.description;
     const image = req.body.image;
     try {
          await db.execute("INSERT INTO blog(title, description, image) VALUES(?,?,?)", [title, description, image])
          res.redirect('/')
     } catch (err) {
          console.error('Veritabanı hatası:', err);
          return res.status(500).render('error', {
               errorMessage: 'Bir veritabanı hatası oluştu. Lütfen daha sonra tekrar deneyin.',
          });
     }
};