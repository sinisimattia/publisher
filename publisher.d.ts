import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Publisher: { install: InstallFunction };
export default Publisher;

export const PublisherSample: VueConstructor<Vue>;
