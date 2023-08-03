exports.getIndexPage = (req, res) => {
     res.status(200).render('index')
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