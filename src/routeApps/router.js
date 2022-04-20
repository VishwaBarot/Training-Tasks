import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Day1 from '../pages/day1';
import Day2 from '../pages/day2';
import Day3 from '../pages/day3';
import Day4 from '../pages/day4';
import Day6 from '../pages/day6';
import Day7 from '../pages/day7';
import Day8 from '../pages/day8';
import Day9 from '../pages/day9';
import Day10 from '../pages/day10';
import Day11 from '../pages/day11';
import Day12 from '../pages/day12';
import Day13 from '../pages/day13';
import Day14 from '../pages/Day14/day14';
import Angular from '../components/day10/angular';
import Vue from '../components/day10/vue';
import User from '../components/day10/User';
import Homepage from '../components/homepage';

const RouteApp = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day6" element={<Day6 />} />
      <Route path="/day7" element={<Day7 />} />
      <Route path="/day8" element={<Day8 />} />
      <Route path="/day9" element={<Day9 />} />
      <Route path="/day11" element={<Day11 />} />
      <Route path="/day12" element={<Day12 />} />
      <Route path="/day13" element={<Day13 />} />
      <Route path="/day14" element={<Day14 />} />
      <Route path="/day10" element={<Day10 />}>
        <Route path="user" element={<User />} />
        <Route path="angular" element={<Angular />} />
        <Route path="vue" element={<Vue />} />
      </Route>
      <Route path="/*" element={<h3 align="center">Page 404 not found</h3>} />
    </Routes>
  </div>
);

export default RouteApp;
