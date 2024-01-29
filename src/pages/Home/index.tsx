import useTheme from '@hooks/useTheme';
import '@styles/index.scss';

const HomePage = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h2>
        Home page
      </h2>

      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default HomePage;