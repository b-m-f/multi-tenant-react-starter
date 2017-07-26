import webpack from 'webpack';
import webpackConfig, { createTenantConfig } from './webpack.config';

/**
 * Creates application bundles from the source files.
 */
function bundle() {
  return new Promise((resolve, reject) => {
    webpack(createTenantConfig('a')).run((err, stats) => {
      if (err) {
        return reject(err);
      }

      console.info(stats.toString(webpackConfig[0].stats));
      return resolve();
    });
  });
}

export default bundle;
