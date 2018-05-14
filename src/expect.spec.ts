import { expect } from 'chai';

it('not', () => {
  // 以降のassertionの打ち消し 
  expect(() => {}).not.throw();
  expect(1).not.equal(2);
});

it('deep', () => {
  // 値の一致を見るようになる
  expect({a:1}).to.deep.equal({a:1});
  expect({a:{b:2}}).to.deep.equal({a:{b:2}});
});

it('key', () => {
  expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
  expect({a: 1, b: 1}).to.have.any.keys('a');

  // String/Arrayもサポートしているけど正直使い所が分からない
  expect(['a', 'b']).to.have.any.keys(0);
});

it('nested', () => {
  // これちょっとおもしろい
  expect({a:{b:{c:1}}}).to.have.nested.property('a.b.c');
});

it('own', () => {
  // なぜかownはない
  //let foo = {a:1};
  //expect(foo).to.have.own.property('a');
});

it('orderd', () => {
  expect([3,2,1]).to.have.ordered.members([3,2,1]);
  expect([3,2,1]).not.to.have.ordered.members([1,2,3]);
});

it('equal', () => {
  expect(1).to.equal(1);
  expect({a:1}).to.not.equal({a:1});

  // syntax sugarがいっぱいあるっぽい
  expect(1).to.eq(1);
  expect(1).to.eql(1);
  expect(1).to.equals(1);
});

