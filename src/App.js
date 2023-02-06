import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

import "./App.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const App = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInDown" duration="0.2s">
      <div className="App">
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <div className="gradient__bg">
            <Navbar />
            <Header />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <Brand />
          <WhatGPT3 />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <Features />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <Possibility />
          <CTA />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <Blog />
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" duration="0.2s">
          <Footer />
        </AnimationOnScroll>
      </div>
    </AnimationOnScroll>
  );
};

export default App;
