import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../../services/API_themoviedb';
import { SimpleCarousel } from '../../components/SimpleCarousel/SimpleCarousel';
import { CustomSelect, PageTitle } from './Home.styled';
import { MenuItem } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from 'components/MovieList';

const Home = ({ theme }) => {
  const [trending, setTrending] = useState([]);
  const [period, setPeriod] = useState('day');
  const [isLoading, setIsLoading] = useState(true);

  const onSelectChange = e => {
    setPeriod(e.target.value);
  };

  useEffect(() => {
    try {
      getMoviesTrending(period).then(({ results }) => {
        setTrending(results);
      });
    } catch (error) {
      toast.error('You have some error. Please, try reloading page');
    } finally {
      setIsLoading(false);
    }
  }, [period]);

  return (
    <>
      <CustomSelect
        theme={theme}
        className="customSelect"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={period}
        onChange={onSelectChange}
      >
        <MenuItem value="day">Day</MenuItem>
        <MenuItem value="week">Week</MenuItem>
      </CustomSelect>
      {period === 'day' ? (
        <PageTitle theme={theme}>Trending today</PageTitle>
      ) : (
        <PageTitle theme={theme}>Trending for a week</PageTitle>
      )}
      {isLoading && <Loader />}
      <SimpleCarousel trending={trending} theme={theme} />
      <MovieList theme={theme} item={trending} />
    </>
  );
};

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Home;
