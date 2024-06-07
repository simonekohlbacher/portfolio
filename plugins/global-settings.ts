import { defineNuxtPlugin } from '#app';
import { getStoryblokVersion, useStoryblokApi } from '@storyblok/vue';

export default defineNuxtPlugin(async (nuxtApp) => {

  const storyblokApi = useStoryblokApi();

  const { data } = await useAsyncData(
    'global-settings',
    async () =>
      await storyblokApi.get('cdn/stories/global-settings', {
        version,
        resolve_links: 'url',
        cv: Date.now(),
      })
  );

  nuxtApp.provide('globalSettings', data?.value?.data?.story?.content || {});
});
