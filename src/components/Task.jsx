export const Task=(props)=>{
    const {name} = props;

    return (
        <li>
            <div>
                <input type="checkbox"></input>
            </div>
            <h3>{name}</h3>
        </li>
    );
}