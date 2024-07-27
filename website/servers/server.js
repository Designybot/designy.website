const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;

const app = express();
const port = 3000;

const CLIENT_ID = "";
const CLIENT_SECRET = "";
const CALLBACK_URL = "";

passport.serializeUser(user)