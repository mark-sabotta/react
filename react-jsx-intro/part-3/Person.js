function Person(props) {
    const {name, age, hobbies} = props;
    const voteText = age >= 18 ? "Get out and vote!" : "You must be 18 to vote";
    const hobbiesLI = hobbies.map(hobby => <li>{hobby}</li>);
    const displayName = name.length > 8 ? name.slice(0,6) + "..." : name;
    return(
    <div>
        <p>Learn some information about this person</p>
        <h3>{voteText}</h3>
        <h3>Name: {displayName}</h3>
        <h3>Hobbies</h3>
        <ul>
        {hobbiesLI}
        </ul>
    </div>
    );
}