module.exports = function(ctx, cb) {
  console.log("Webhook #2 invoked");
  cb(null, { hello: ctx.data.name || 'Anonymous' });
};