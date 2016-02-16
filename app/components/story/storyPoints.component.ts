import template from "./storyPoints.html!text"

export default {
    bindings: {
        count: '=',
        ngModel: '='
    },

    controller: function () {
        var vm = this;

        function increment() {
            this.ngModel++;
        }

        function decrement() {
            vm.ngModel--;
        }

        //$onInit


        this.increment = increment;
        this.decrement = decrement;
    },
    template: template
}