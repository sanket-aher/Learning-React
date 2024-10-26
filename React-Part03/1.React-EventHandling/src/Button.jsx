function handleClick(){
    console.log("Hello!");
}
function handleMouseOver(){
    console.log("bye!");
}
function handleDblClick(){
    console.log("you double clicked");
}

export default function Button() {
    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cum laudantium! Molestias nulla natus vel ab debitis fuga maiores deserunt voluptas possimus recusandae aperiam quis, atque temporibus maxime quia nemo? Totam sapiente, enim dolore ab incidunt debitis voluptatibus ad repudiandae aliquid quia, fugiat non. Sunt iusto magnam facilis dolores quibusdam?</p>
            <button onDoubleClick={handleDblClick}>Double Click me!</button>
        </div>
    );
}