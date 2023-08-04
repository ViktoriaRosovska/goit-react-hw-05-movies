import PropTypes from 'prop-types';
import imgNotFound from '../../img/imgnotfound.jpg';
import { useEffect, useState } from 'react';
import { getMoviesTrending } from '../../services/API_themoviedb';
import { SimpleCarousel } from '../../components/SimpleCarousel/SimpleCarousel';
import { Link } from 'react-router-dom';

import { CustomSelect, GridList, PageTitle } from './Home.styled';
import { MenuItem } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <GridList theme={theme}>
        {trending.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <div
                    style={{
                      width: '260px',
                      height: '390px',
                    }}
                  >
                    <img src={imgNotFound} alt="not found" />
                  </div>
                )}

                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </GridList>
    </>
  );
};

Home.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Home;
