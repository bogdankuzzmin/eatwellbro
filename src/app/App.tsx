import { AppRouter } from '@app/providers/router';
import { useTheme } from '@app/providers/ThemeProvider';
import classNames from '@shared/lib/classNames';

import '@app/styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <AppRouter />
    </div>
  );
};

export default App;