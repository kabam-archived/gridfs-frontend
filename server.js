var
  MWC = require('mwc_kernel'),
  mwc_gridfs = require('mwc_plugin_gridfs'),
  config = require('./config.json').development,

  mwc = MWC(config);

mwc.usePlugin(mwc_gridfs);

// send csrf token upon request
mwc.usePlugin({
  extendMiddlewares: function(core){
    return function(req, res, next) {
      res.cookie('XSRF-TOKEN', req.session._csrf);
      next();
    }
  }
});

// placeholder middleware for static files, used by grunt-express
mwc.usePlugin({
  extendMiddlewares: function(core){
    return function staticsPlaceholder(req, res, next) {
      return next();
    }
  }
});


// construct the app
mwc.ready();

// and export it
module.exports = mwc.app;
