import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {

    const { _id, image, Price, name, description } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">

            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} style={{ objectFit: 'cover' }} alt="ServicesPhoto" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-fuchsia-600 font-bold">{name}</h2>
                <textarea maxlength="50">{description}</textarea>
                <div className="card-actions justify-end">
                    <p className='font-bold text-xl'>price: <span className='text-pink-600'>${Price}</span></p>
                    <Link to={`/services/${_id}`}>
                        <button className="py-2 rounded-lg text-white px-3 bg-green-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;