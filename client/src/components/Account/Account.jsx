import { useSelector } from 'react-redux';


const Account = () => {
    const state = useSelector(state => state.user);


    return(
     <div>
        <h3>Account info</h3>
        <div>
            <h4>{state.userName}</h4>
            <h4>{state.userEmail}</h4>
        </div>
     </div>   
    )
};

export default Account;