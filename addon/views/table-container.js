import Ember from 'ember';
import StyleBindingsMixin from 'ember-table-legacy/mixins/style-bindings';

export default Ember.View.extend(
StyleBindingsMixin, {
  classNames: ['ember-table-table-container'],
  styleBindings: ['height', 'width']
});
