import './App.css';
import img1 from './image/79784-ed4_wide.jpg';

export default function App()
{
   let ingredient=[{ing:"Сахар",count:"200 г"},{ing:"Яичный белок",count:"4 штуки"}];

  return(
    <div className="App">
      <h1>Меренга</h1>
      <h2>Ингредиенты</h2>
      {ingredient.map(function(item) {       
      return <li>{item.ing} - {item.count}</li>;     
    })}
    <h2>Рецепт</h2>
    <Steps step="Духовку разогреть до 100 градусов.Подготовить два противня, застеленных пергаментной бумагой для выпекания."/>
    <Steps step="Взбить белки при помощи миксера в течение двух минут. Не прекращая взбивать, всыпать сахар. Взбивать еще около трех минут. В результате должна получиться белая тягучая смесь."/>
    <Steps step="Ложкой выложить на противни. Придать желаемую форму каждой меренге."/>
    <Steps step="Выпекать в течение полутора часов."/>
    <img src={img1} alr={"img"}/>
    </div>
  )
}

function Steps(props){
  return <p>{props.step}</p>
}