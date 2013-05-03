var assert = require('assert'),
    Container = require('container');

describe('Container', function() {

  it('has name', function() {
    var container = new Container('foo');

    assert.equal(container.name, 'foo');
  });
  
  it('adds components', function() {
    var container = new Container,
        component = { name: 'foo' };

    container.add(component);

    assert(container.has('foo'));
    assert(container.has(component));
    assert.equal(container.get('foo'), component);
  });

  it('removes components', function() {
    var container = new Container,
        component = { name: 'foo' };

    container.add(component);
    container.remove(component);

    assert(!container.has('foo'));
    assert(!container.has(component));
    assert.throws(function() {
      container.get('foo');
    }, /has not been found/);
  });

});
