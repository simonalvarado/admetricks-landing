/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import HeroSection from '../../../src/components/HeroSection.vue';

describe('HeroSection', () => {
  it('renders the component', () => {
    const wrapper = mount(HeroSection);
    expect(wrapper.exists()).toBe(true);
  });

  it('contains a primary button', () => {
    const wrapper = mount(HeroSection);
    const primaryButton = wrapper.find('.primary-button');
    expect(primaryButton.exists()).toBe(true);
  });

  it('contains a secondary button', () => {
    const wrapper = mount(HeroSection);
    const secondaryButton = wrapper.find('.secondary-button');
    expect(secondaryButton.exists()).toBe(true);
  });
});