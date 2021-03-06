/**
 * app.js
 *
 * Runner of tilez service
 */
/**
 * Copyright 2011-2014 The AURIN Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * [apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
"use strict";
var path = require("path");

var commons = require("nodejs-commons")

// Loads properties files
var propDir = (process.env.AURIN_DIR) ? process.env.AURIN_DIR : ".";
var propFile = path.join(propDir, "/tilez-combined.properties");

// Starts server
var server = commons.startCluster(propFile, "tilez", function(commons, callback) {
  require("./src/tilez.js").startServer(commons, function(commons, app) {
    callback(commons, app);
  });
});
