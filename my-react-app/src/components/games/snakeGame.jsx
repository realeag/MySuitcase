import React, {useState, useEffect} from "react";

const SnakeGame = () => {

    const [snake, setSnake] = useState([[0, 0]]);
    const [direction, setDirection] = useState('right');
    const [food, setFood] = useState([10, 10]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // mover la serpiente
        let head = snake[snake.length - 1];
        switch (direction) {
          case 'right':
            head = [head[0] + 1, head[1]];
            break;
          case 'left':
            head = [head[0] - 1, head[1]];
            break;
          case 'up':
            head = [head[0], head[1] - 1];
            break;
          case 'down':
            head = [head[0], head[1] + 1];
            break;
          default:
            break;
        }
        setSnake([...snake, head]);
  
        // verifica choque con comida
        if (head[0] === food[0] && head[1] === food[1]) {
          setFood(generateFood());
        }
  
        // verifica choque con paredes
        if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20) {
          gameOver();
        }
      }, 200);
      return () => clearInterval(interval);
    }, [snake, direction, food]);
  
    function handleKeyDown(event) {
      event.preventDefault();
      switch (event.key) {
        case 'ArrowRight':
          setDirection('right');
          break;
        case 'ArrowLeft':
          setDirection('left');
          break;
        case 'ArrowUp':
          setDirection('up');
          break;
        case 'ArrowDown':
          setDirection('down');
          break;
        default:
          break;
      }
    }
  
    function generateFood() {
      return [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)];
    }
  
    function gameOver() {
      alert('Game over!');
    }
  
    return (
      <div onKeyDown={handleKeyDown} tabIndex={0}>
        <canvas width={20} height={20}></canvas>
      </div>
    );
  }
  
  export default SnakeGame;