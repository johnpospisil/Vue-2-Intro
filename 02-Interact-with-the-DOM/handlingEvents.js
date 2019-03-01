new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step, event) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // Do not show coordinates where the 'dummy' function is used.
        // dummy: function(event) {
        //     event.stopPropagation();
        // }
    }
});