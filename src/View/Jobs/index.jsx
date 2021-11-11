import React from 'react';
import HeaderJobs from '../../Components/Jobs/HeaderJobs';
import ListJobs from '../../Components/Jobs/ListJobs';
import Footer from '../../Components/Footer'
import Loading from '../../Components/LoadingScreen';
import { useSelector } from 'react-redux';

const Jobs = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

    return (
        <>
            <HeaderJobs/>
            <ListJobs/>
            <Footer/>
            {isLoading && <Loading/>}
        </>
    );
};

export default Jobs;