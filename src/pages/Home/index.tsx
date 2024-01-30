import useTheme from '@hooks/useTheme';

const HomePage = () => {
  const {toggleTheme} = useTheme();

  return (
    <>
      <h2>
        Home page
      </h2>

      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};

export default HomePage;