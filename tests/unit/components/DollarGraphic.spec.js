/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import DollarGraphic from '../../../src/components/DollarGraphic.vue';

describe('DollarGraphic', () => {
  it('renders the component', () => {
    const wrapper = mount(DollarGraphic);
    expect(wrapper.exists()).toBe(true);
  });
});