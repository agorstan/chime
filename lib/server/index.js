'use strict';

const koa = require('koa');
const route = require('koa-route');
const app = koa();
const logger = require('../util/logger');

app.use(require('koa-bunyan')(logger, {
    level: 'info',
    // All requests longer than specified time will have level 'warn'
    timeLimit: 1000
}));

// REST API
app.use(route.get('/api/items', function*() {
    this.body = 'Get';
}));
app.use(route.get('/api/items/:id', function*(id) {
    this.body = 'Get id: ' + id;
}));
app.use(route.post('/api/items', function*() {
    this.body = 'Post';
}));
app.use(route.put('/api/items/:id', function*(id) {
    this.body = 'Put id: ' + id;
}));
app.use(route.delete('/api/items/:id', function*(id) {
    this.body = 'Delete id: ' + id;
}));

// all other routes
app.use(function *() {
  this.body = '404';
});

const server = app.listen(3000, function() {
  console.log('Koa is listening to http://localhost:3000');
});