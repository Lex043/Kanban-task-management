/* eslint-disable react/prop-types */
const HomePage = ({ token }) => {
    return (
        <div>
            <h1 className="text-white">Welcome back {token.user.email}</h1>
        </div>
    );
};

export default HomePage;
