import { ReactLib } from '@nx-rspack-example/react-lib';
import { jsLib } from '@nx-rspack-example/js-lib';

import NxWelcome from './nx-welcome';

export function App() {
  console.log(jsLib());
  return (
    <div>
      <NxWelcome title="react-app" />
      <ReactLib />
    </div>
  );
}

export default App;
