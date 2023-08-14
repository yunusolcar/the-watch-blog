const db = require("../models/database");

/*
exports.getIndexPage = (req, res) => {
     db.execute("select * from blog")
     .then(response => {
          const results = response[0]
          res.render('index', {
               title: results[0],
               description: results[0].description
          })
          console.log(results[0].title)
     })
     .catch(err => console.log(err));
}
*/

exports.getIndexPage = (req, res) => {
     const query = 'SELECT * FROM blog'
     db.query(query, (err, results) => {
          if (err) throw err;
          res.render('index', {
               blogs: results
          })
     })
}


exports.getAboutPage = (req, res) => {
     res.status(200).render('about')
}

exports.getBlogPage = (req, res) => {
     res.status(200).render('blog')
}



exports.getContactPage = (req, res) => {
     res.status(200).render('contact')
}

exports.getPostDetailsPage = (req, res) => {
     res.status(200).render('post-details')
}

exports.getAddPost = (req, res) => {
     res.status(200).render('add')
}
