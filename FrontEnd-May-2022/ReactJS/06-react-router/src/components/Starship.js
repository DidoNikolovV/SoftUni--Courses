import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Route, Routes } from 'react-router-dom';

export const Starship = () => {
    const [starship, setStarship] = useState([]);
    const { starshipId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
            .then(res => res.json())
            .then(result => {
                setStarship(result);
            })
            .catch(() => {
                navigate('/not-found');
            });
    }, [starshipId, navigate]);

    const nextProductHandler = () => {
        // TODO: Redirect to next product
        navigate(`/starships/${Number(starshipId) + 1}`);
    };


    return (
        <>
            <h2>Products Page</h2>

            <h3>Product {starshipId} Specification</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
            </ul>

            <h3>Movies</h3>

            <nav>
                <ul>
                    {starship.films?.map((x, i) =>
                        <li key={x}><Link to={`/starships/${starshipId}/films/${i + 1}`}>Film {i + 1}</Link></li>
                    )}
                </ul>
            </nav>

            <section>
                <Routes>
                    <Route path={`films/1`} element={<h3>Film 1</h3>} />
                    <Route path={`films/2`} element={<h3>Film 2</h3>} />
                    <Route path={`films/3`} element={<h3>Film 3</h3>} />
                </Routes>
            </section>

            <button onClick={nextProductHandler}>Next</button>
        </>

    );
};