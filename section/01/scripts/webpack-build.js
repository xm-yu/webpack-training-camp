/*
 * @Author: yuzhicheng
 * @Date: 2022-12-07 11:04:59
 * @Last Modified by: yuzhicheng
 * @Last Modified time: 2022-12-07 11:43:05
 */

const webpack = require('webpack');
const path = require('path');

// 测试mode 对构建的影响

const compilerFn1 = () => {
  return webpack([
    {
      entry: path.resolve(__dirname, '../index.js'),
      mode: 'production',
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.production.js',
      },
    },
    {
      entry: path.resolve(__dirname, '../index.js'),
      mode: 'development',
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.development.js',
      },
    },
    {
      entry: path.resolve(__dirname, '../index.js'),
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.unknown.js',
      },
    },
  ]);
};

const compilerFn2 = () => {
  return webpack({
    entry: path.resolve(__dirname, '../index.js'),
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'main.production.js',
    },
  });
};

compilerFn2().run((err, stats) => {
  console.log(stats);
});
