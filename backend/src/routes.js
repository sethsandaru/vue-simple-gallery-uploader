
module.exports.createRoutes = function (expressApp) {
    expressApp.get('/', (req, res) => res.send('Simple Backend of Vue Uploader'));

    expressApp.post('/api/upload', (req, res) => {
        const controllerClazz = require('./controllers/uploader.controller')
        const controller = new controllerClazz(req, res);
        return controller.upload()
    })
}