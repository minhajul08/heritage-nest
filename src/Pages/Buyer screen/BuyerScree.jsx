import BuyerCover from "./BuyerCover";
import NewListed from "./NewListed";
import PlotList from "./PlotList";
import Popular from "./Popular";
import Testimonials from "./Testimonials";

 
const BuyerScree = () => {
    return (
        <div>
            <BuyerCover/>
            <PlotList/>
            <Popular/>
            <NewListed/>
            <Testimonials/>
        </div>
    );
};

export default BuyerScree;