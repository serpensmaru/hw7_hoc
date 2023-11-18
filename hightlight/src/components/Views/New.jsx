function New(props) {
    console.log(props.children, 'newProps')
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};
export default New;