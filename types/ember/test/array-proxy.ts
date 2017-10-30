import Ember from 'ember';

declare const arr: Ember.NativeArray<number>;
let x: Ember.ArrayProxy<number> = Ember.ArrayProxy.create({ content: arr });
