const webpack = require('webpack');

// webpack({}, (err, stats) => {
//   if (err || stats.hasErrors()) {
//   }

//   //
//   console.log('处理完成');
// });

const compiler = webpack({
  entry: '../index.js',
  mode: 'production',
  output: {
    filename: 'main.production.js',
  },
});

compiler.run((err, stats) => {
  // console.log(err);
  compiler.close((closeErr) => {
    console.log(closeErr);
  });
});
