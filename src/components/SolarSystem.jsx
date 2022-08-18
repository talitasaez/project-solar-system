import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => {
          const { name, image } = planet;
          return (
            <PlanetCard
              key={ name }
              planetName={ name }
              PlanetImage={ image }
            />);
        })}
      </div>
    );
  }
}

export default SolarSystem;
