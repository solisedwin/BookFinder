
const Login = (props: any) => {
    console.log('-- Inside Login compenent from Register')
    console.log('*** ' + props.location.state.isRegistered + ' ***');
    return (
        <div>
            Login component;
        </div >
    );
}

export default Login;
