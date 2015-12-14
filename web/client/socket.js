var socket = io();
var userId = "user";

$("#foward-button").on('click', function(e){
    socket.emit('FOWARD', {value: 0, userId: userId});
});

$("#back-button").on('click', function(e){
    socket.emit('BACK', {value: 0, userId: userId});
});

$("#left-button").on('click', function(e){
    socket.emit('LEFT', {value: 0, userId: userId});
});

$("#right-button").on('click', function(e){
    socket.emit('RIGHT', {value: 0, userId: userId});
});

$("#brake-button").on('click', function(e){
    socket.emit('BRAKE', {value: 0, userId: userId});
});