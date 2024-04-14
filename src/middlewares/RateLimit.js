'use strict';

/**
 * `RateLimit` middleware
 */
const path = require("path");
const utils  = require("@strapi/utils")
const {has, toLower, isString} = require("lodash/fp")
const {RateLimitError} = utils.errors
module.exports = (config, { strapi }) => {
  // Add your own logic here.

  return async (ctx, next) => {
    let rateLimitConfig = strapi.config.get('admin.rateLimit')
    strapi.log.info('In RateLimit middleware.');

    await next();
  };
};
