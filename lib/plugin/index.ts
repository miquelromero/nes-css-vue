import type { FunctionPlugin } from 'vue';
import * as components from '../components';


export const plugin: FunctionPlugin = (app) => {
  for (const [componentName, component] of Object.entries(components)) {
    app.component(componentName, component);
  }
}
