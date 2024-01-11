/**
 * The WaveAnimation component renders a series of div elements with a CSS class that determines
 * whether they are active or not based on the isPlaying prop.
 * @returns The WaveAnimation component is returning a div with multiple child divs. The class names of
 * the child divs are determined by the value of the isPlaying prop. If isPlaying is true, the child
 * divs will have the class "box active", otherwise they will have the class "box".
 */
import React from "react";
import "../../Styles/WaveAnimation.css";

export default function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "box active" : "box";

  return (
    <div className="box-container flex">
      <div className={`${waveClass} box1`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
      <div className={`${waveClass} box2`}></div>
      <div className={`${waveClass} box3`}></div>
      <div className={`${waveClass} box4`}></div>
      <div className={`${waveClass} box5`}></div>
      <div className={`${waveClass} box6`}></div>
      <div className={`${waveClass} box7`}></div>
    </div>
  );
}
