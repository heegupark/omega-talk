import React, { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import Left from '../components/left';
import ChatMain from '../components/chat-main';
import { useSpring, animated } from 'react-spring';

type State = {
  position: { x: number; y: number };
  tempPosition: { x: number; y: number };
  size: { width: number; height: number };
  tempSize: { width: number; height: number };
  isExpanded: boolean;
  isMinized: boolean;
  isDraggable: boolean;
};
export default class Main extends React.Component<State> {
  state: State = {
    position: { x: 200, y: 50 },
    tempPosition: { x: 0, y: 0 },
    size: { width: 400, height: 640 },
    tempSize: { width: 400, height: 640 },
    isExpanded: false,
    isMinized: false,
    isDraggable: true,
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   position: { x: 200, y: 50 },
    //   tempPosition: { x: 0, y: 0 },
    //   size: { width: 400, height: 640 },
    //   tempSize: { width: 400, height: 640 },
    //   isExpanded: false,
    //   isMinized: false,
    //   isDraggable: true
    // }
    this.setPosition = this.setPosition.bind(this);
    this.setTempPosition = this.setTempPosition.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setTempSize = this.setTempSize.bind(this);
    this.setIsExpanded = this.setIsExpanded.bind(this);
    this.setIsMinized = this.setIsMinized.bind(this);
    this.setIsDraggable = this.setIsDraggable.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
  }

  setPosition(position) {
    this.setState({
      position: { x: position.x, y: position.y },
    });
  }
  setTempPosition(position) {
    this.setState({
      tempPosition: { x: position.x, y: position.y },
    });
  }
  setSize(size) {
    this.setState({
      size: { width: size.width, height: size.height },
    });
  }
  setTempSize(size) {
    this.setState({
      tempSize: { width: size.width, height: size.height },
    });
  }
  setIsExpanded(isExpanded) {
    this.setState({
      isExpanded: isExpanded,
    });
  }
  setIsMinized(isMinized) {
    this.setState({
      isMinized: isMinized,
    });
  }
  setIsDraggable(isDraggable) {
    this.setState({
      isDraggable: isDraggable,
    });
  }

  handleExpand = () => {
    const { isExpanded, tempPosition, tempSize, position, size } = this.state;
    const {
      setIsDraggable,
      setIsExpanded,
      setPosition,
      setTempPosition,
      setSize,
      setTempSize,
    } = this;
    if (this.state.isExpanded) {
      setPosition({ x: tempPosition.x, y: tempPosition.y });
      setSize({ width: tempSize.width, height: tempSize.height });
      setIsDraggable(true);
    } else {
      setTempPosition({ x: position.x, y: position.y });
      setPosition({ x: 0, y: 0 });
      setTempSize({ width: size.width, height: size.height });
      setSize({ width: window.innerWidth, height: window.innerHeight });
      setIsDraggable(false);
    }
    setIsExpanded(!isExpanded);
  };

  handleMinimize = () => {
    const { tempPosition, position, isMinized } = this.state;
    const { setIsMinized, setPosition, setTempPosition } = this;
    if (isMinized) {
      setPosition({ x: position.x, y: tempPosition.y });
    } else {
      setTempPosition({ x: position.x, y: position.y });
      setPosition({ x: position.x, y: window.innerHeight - 50 });
    }
    setIsMinized(!isMinized);
  };

  render() {
    const {
      isExpanded,
      tempPosition,
      tempSize,
      position,
      size,
      isDraggable,
    } = this.state;
    const { setPosition, setSize, handleMinimize, handleExpand } = this;
    const element = (
      <Rnd
        default={{
          x: position.x,
          y: position.y,
          width: size.width,
          height: size.height,
        }}
        position={{
          x: position.x,
          y: position.y,
        }}
        size={{
          width: size.width,
          height: size.height,
        }}
        minWidth={320}
        minHeight={640}
        onDragStop={(e, d) => {
          setPosition({ x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          console.log(ref.style.width);
          setSize({
            width: Number(ref.style.width.split('px')[0]),
            height: Number(ref.style.height.split('px')[0]),
          });
        }}
        disableDragging={!isDraggable}
      >
        <div className="box">
          <div className="left">
            <Left handleMinimize={handleMinimize} handleExpand={handleExpand} />
          </div>
          <div className="main-chat">
            <ChatMain />
          </div>
        </div>
      </Rnd>
    );
    return <Content>{element}</Content>;
  }
}
