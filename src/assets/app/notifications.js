//@ts-check
FIND('notifications', function (component) {
    component.append('fa-lightbulb-o', 'This is a new notification component.');
});

setTimeout(function () {
    FIND('notifications').append('fa-calendar', 'You have a meeting in the Central Park.', function () {
        alert('You clicked on the notification');
    }, 'red');
}, 3000);

setTimeout(function () {
    FIND('notifications').append('fa-link', 'Please support <a href="https://github.com/petersirka/jComponent" target="_blank">jComponent on GitHub</a>.');
}, 6000);

setTimeout(function () {
    FIND('notifications').append('fa-facebook-square', 'Total.js is node.js web application framework, please support it on social networks.');
}, 10000);