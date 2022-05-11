import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';

const AppointmentPage = () => {
    return (
        <div className='bg-gray-100'>
            <AppointmentBanner/>
            <Footer/>
        </div>
    );
};

export default AppointmentPage;