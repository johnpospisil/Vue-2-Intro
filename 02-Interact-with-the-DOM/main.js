new Vue({
    el: '#app',
    data: {
        title: 'Hello World! This is the initial sayHello() message.',
        link: 'http://google.com',
        finishedLink: '<a href="http://www.bing.com">Bing</a>'
    },
    methods: {
        sayHello: function () {
            this.title = "This is the updated sayHello() message.";
            return this.title;
        }
    }
});