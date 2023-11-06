function Tweet(props) {
    const {username, name, date, msg} = props;
    return <div className = "tweet">
        <h3>{name}</h3>
        <p>{msg}</p>
        <h5>@{username} on: {date}</h5>
    </div>
}