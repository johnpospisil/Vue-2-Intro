new Vue({
    el: '#exercise',
    data: {
        name: 'Yorba Mintyface',
        age: '33',
        imgSource: 'https://images.unsplash.com/photo-1451899948875-4d274fd0b620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
    },
    methods: {
        generateRandomNumber: function() {
            return Math.random();
        }
    }
})