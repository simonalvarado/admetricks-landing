/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import App from '../../../src/App.vue';

describe('App', () => {
  it('renders the HeroSection component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: 'HeroSection' }).exists()).toBe(true);
  });

  it('renders the DollarGraphic component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: 'DollarGraphic' }).exists()).toBe(true);
  });

  it('renders the DownloadButton component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: 'DownloadButton' }).exists()).toBe(true);
  });
});