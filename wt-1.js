var util = require('util');
module.exports = function(ctx, cb) {
  console.log(util.inspect(ctx.body, {depth: null}));
  console.log(util.inspect(ctx.body.issue.url, {depth: null}));
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};