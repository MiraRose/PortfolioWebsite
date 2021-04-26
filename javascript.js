
var app = new Vue({

  el: '#app',

  data: {
    projectInView: {
      image: 'vendingmachineproject.png', 
      alt: '', 
      demo: '', 
      github: 'https://github.com/MiraRose/VendingMachineKata', 
      id: 0 
    },
    projects: [
      { isActive: false, name:'Vending Machine in Java', image: 'vendingmachineproject.png', alt: '', demo: '', github: 'https://github.com/MiraRose/VendingMachineKata', description: "The classic vending machine project in Java.", id: 0 },
      { isActive: true, name:'Square Gardening App', image: 'squaregardeningapp.png', alt: '', demo: 'SquareGardenApp/index.html', description: "A web app built in the Vus.js framework for planning raised garden beds.", github: 'https://github.com/MiraRose/SquareGardenApp', id: 1 },
      { isActive: false, name:'Advent of Code 2020', image: 'adventofcode2020.png', alt: '', demo: '', description: "Code and tests in Javascript and Jest for solving challenges for Advent of Code 2020", github: 'https://github.com/MiraRose/AdventOfCode2020', id: 2 },
      
  ]
  },

  methods: {
    forward: function() {
      if (this.projects.length > 1 && this.projectInView.id < this.projects.length - 1 ) {
        var currentId = this.projectInView.id;
        this.projectInView = this.projects[currentId + 1];
      }
      else if (this.projectInView.id == this.projects.length - 1) {
        this.projectInView = this.projects[0];
      }
    },

    backward: function() {
      if (this.projects.length > 1 && this.projectInView.id > 0) {
        var currentId = this.projectInView.id;
        this.projectInView = this.projects[currentId - 1]
      }
      else if (this.projectInView.id == 0) {
        this.projectInView = this.projects[this.projects.length - 1];
      }
    }
  }
}

)