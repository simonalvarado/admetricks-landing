/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import DownloadButton from '../../../src/components/DownloadButton.vue';

describe('DownloadButton', () => {
  it('renders the component', () => {
    const wrapper = mount(DownloadButton);
    expect(wrapper.exists()).toBe(true);
  });
});