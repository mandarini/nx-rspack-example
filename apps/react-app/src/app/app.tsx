import { ReactLib } from '@nx-rspack-example/react-lib';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="react-app" />
      <ReactLib />
    </div>
  );
}

export default App;
