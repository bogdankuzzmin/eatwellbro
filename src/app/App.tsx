import { AppRouter } from '@app/providers/router';
import { useTheme } from '@app/providers/ThemeProvider';

import classNames from '@shared/lib/classNames';

import { NavBar } from '@widgets/NavBar';

import '@app/styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;