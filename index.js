var Events = require('events');

module.exports = Container;

function Container(name) {
  Events.extend(this);

  this.components = [];
  this.map = {};
}

Container.prototype = {

  add: function(component) {
    this.components.push(component);

    if (component.name != null) {
      this.map[component.name] = component;
    }

    this.trigger('add', component);
  },

  remove: function(component) {
    var index = this.components.indexOf(component);

    if (index == -1) {
      throw Error('Component not found');
    }

    this.components.splice(index, 1);

    if (component.name != null) {
      delete this.map[component.name];
    }

    this.trigger('remove', component);
  },

  get: function(name) {
    if (this.map[name] == null) {
      throw Error('Component with name ' + name + ' has not been found');
    }

    return this.map[name];
  },

  has: function(name) {
    return this.map[name] != null;
  }

};
