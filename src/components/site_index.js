import React, { Component } from 'react';

export default class SiteIndex extends Component {
  render() {
    return (
      <div>
        <h2 class="text-center header"> About Me < /h2>
        <h4 class="header"> Professional </h4>
            <p class="lead">
            I'm a computer engineer that currently works in as an RTL verification engineer for a Qualcomm. Since
            December 2013 I've worked on a DDR Memory Controller team writing testbenches for the backend and DDR
            interfaces. Features of the verification project that I have owned are DDR4 NVDIMM-P, write CRC, thermal throttling,
            error capture and command queue verification. The first public product I worked on was the
            <a href="https://www.qualcomm.com/products/qualcomm-centriq-2400-processor"> Qualcomm Centriq 2400</a> which
            was the world's first 10nm server processor, released in November of 2017.
            </p>
         <h4 class="header"> Interests </h4>
            <p class="lead">
            Hobbies include reading, climbing, computer science, technology, methodology, hiking and meditation.
            <br/>
            I enjoy reading and discussing a wide variety of topics that include but are not limited to:
                <ul>
                    <li>Mediation</li>
                    <li>Psychology</li>
                    <li>Neuroscience</li>
                    <li>Philosophy</li>
                    <li>Entheogens</li>
                    <li>Consciousness</li>
                </ul>
            </p>
          <h4 class="header"> Childhood and Education </h4>
            <p class="lead">
            I grew up in Eastern North Carolina in a town called Grantsboro with my mother, father, twin brother and younger
            brother. Never moving while growing up, I spent the first 18 years of my life in our home with about 14 acres
            of our own wooded property with hundreds of acres of neighoring farmland that my brothers and I would explore. Having
            a natural affinity for school, especially science and math, I enjoyed attending school very much. I worked most summers
            in highschool in Oriental, NC cutting grass, maintaining marinas and washing and painting boats.

            After graduating from Pamlico County High School with a class of 140 students, I moved to Durham, NC and attended
            Duke University. I majored in Electrical and Computer Engineering as well as Computer Science. Coming from such a
            small town to a college with such an impressive class body, I was challenged and subsequently empowered in my abilities
            as I never had been before. I thoroughly enjoyed my time there and met a number of great friends I still visit
            and talk to.
            </p>
      </div>
    );
  }
}
