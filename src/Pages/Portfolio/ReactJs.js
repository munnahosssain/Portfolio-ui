import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { TbWorld } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';

const ReactJs = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://safe-forest-62634.herokuapp.com/ReactJS')
                .then(res => res.json())
                .then(data => setData(data))
            setLoading(false);
        }, 800);
    }, []);

    return (
        <div>
            <p>APIs</p>
            <div className="flex grid gap-y-8 gap-x-8 lg:grid-cols-3 md:grid-cols-2">
                {
                    loading ? (<Loading />) : (
                        data.map((item, index) =>
                            <div key={index}>
                                <figure className="w-96 rounded-xl p-8 dark:bg-slate-100">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={item.img} alt="" width="384" height="512" />
                                    <div className="pt-6 text-center space-y-4">
                                        <h3>{item.title}</h3>
                                        <div className="flex justify-evenly">
                                            <a target="_blank" rel="noreferrer" href="https://dental-carebd.web.app/"><TbWorld /></a>
                                            <Link target="_blank" to="/github.com/munnahosssain/Dental-care-UI"><AiFillGithub /></Link>
                                        </div>
                                        {/* <p className="text-lg font-medium"></p> */}
                                    </div>
                                </figure>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default ReactJs;