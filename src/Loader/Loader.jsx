import { ThreeDots } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className="flex justify-center items-center mt-16">
            <ThreeDots
                visible={true}
                height="200"
                width="150"
                color="#FD650B"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    );
};

export default Loader;