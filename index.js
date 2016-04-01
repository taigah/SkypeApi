/**
 * SkypeApi
 * https://github.com/taigah/SkypeApi
 *
 * Copyright (c) 2016 Taigah
 * Licensed under the MIT license.
 */

var request = require('request');

var SkypeApi = function () {

  // Scope.
  var self = this;

  /**
   * Request method
   * @param  {Array} options
   * @return {Promise}
   */
  self.request = function (options) {

  };

  /**
   * Gets the login page
   * @return {Promise}
   */
  self.getLoginPage = function () {

  };

  /**
   * Parse the login page
   * @return {Promise}
   */
  self.parseLogin = function () {

  };

  /**
   * Login to Skype web
   * @param  {String} username
   * @param  {String} password
   * @return {Promise}
   */
  self.login = function (username, password) {

  };

  /**
   * Logout from Skype web
   * @return {Null}
   */
  self.logout = function () {

  };

  /**
   * Add someone as contact
   * @param {String} username
   * @return {Promise}
   */
  self.addContact = function (username) {

  };

  /**
   * Send message to someone
   * @param  {String]} username
   * @param  {String]} message
   * @return {Promise}
   */
  self.sendMessage = function (username, message) {

  };

  /**
   * Create a group
   * @param  {Array} users
   * @return {Promise}
   */
  self.createGroup = function (users) {

  };

  /**
   * Add a user to a group
   * @param {String}  user
   * @param {String} group
   * @return {Promise}
   */
  self.addUser = function (user, group) {

  };

  /**
   * Kick a user from a group
   * @param  {String} user
   * @param  {String} group
   * @return {Promise}
   */
  self.kickUser = function (user, group) {

  };

  /**
   * Leave a group
   * @param  {String} group
   * @return {Promise}
   */
  self.leaveGroup = function (group) {

  };

  /**
   * Get message list
   * @param  {String} user
   * @param  {Int} history
   * @return {Promise}
   */
  self.getMessageList = function (user, history) {

  };

  /**
   * Get contact list
   * @return {Promise}
   */
  self.getContactList = function () {

  };

  /**
   * Get user profile
   * @param  {Array} usernames
   * @return {Promise}
   */
  self.getProfile = function (usernames) {

  };

  /**
   * Get group informations
   * @param  {String} group
   * @return {Promise}
   */
  self.getGroupInfos = function (group) {

  };

  /**
   * Get own profile
   * @return {Promise}
   */
  self.getOwnProfile = function () {

  };

  /**
   * Get own profile
   * @param  {String} username
   * @return {Promise}
   */
  self.search = function (username) {

  };

  /**
   * Poll messages
   * @return {Promise}
   */
  self.poll = function () {

  };

};

module.exports = new SkypeApi();
