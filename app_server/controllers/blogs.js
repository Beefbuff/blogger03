
module.exports.list = function(req, res){
    res.render('blogs-list', {
        title: 'Blog List',
    blogs: [{
            title: 'Firstblog!',
            text: 'I have written my first blog!',
                
        }, {
            title: 'Secondblog!',
            text: 'I have written my second blog!',
                
        }, {
            title: 'Thirdblog!',
            text: 'I have written my third blog!',        
        }]
});
};

module.exports.add = function(req, res){
    res.render('blogAdd', {title: 'Add Blog'});
}

module.exports.edit = function(req, res){
    res.render('blogEdit', {title: 'Edit Blog'});
}

module.exports.delete = function(req, res){
    res.render('blogDelete', {title: 'Delete Blog'});
}