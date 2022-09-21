'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const logger = require('./middleware/logger');
const Port = process.env.PORT || 3002;
const app = express();