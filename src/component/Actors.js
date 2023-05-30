import React from 'react';

const Actors = ({ acteurs }) => {
  return (
    <div>
      <h3>Acteurs :</h3>
      <table>
        <thead>
          <tr>
            <th>Acteur</th>
            <th>Rôle</th>
          </tr>
        </thead>
        <tbody>
          {acteurs.map((acteur, index) => (
            <tr key={index}>
              <td>{acteur.name}</td>
              <td>{acteur.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actors;
