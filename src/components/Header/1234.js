class HeaderContainer extends React.Component {


    componentDidMount() {


        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {



            withCredentials: true



        })



            .then(response => {



                if (response.data.resultCode === 0) {



                    let {id, login, email} = response.data.data;



                    this.props.setAuthUserData(id, email, login);



                }



            });



    }
}