// src/components/Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Qualification</th>
            <th>Percentage/CGPA</th>
            <th>Institution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jun 2017</td>
            <td>B.Tech</td>
            <td>76% (FCD)</td>
            <td>IET, Uttar Pradesh Technical University</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;