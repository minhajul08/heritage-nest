 
import Testimonials from "../../Component/Home/Shared/Testimonials";
import AboutCover from "./AboutCover";
import FlatList from "./FlatList";
import OurTeam from "./OurTeam";
import StoryMission from "./StoryMission";

 
const AboutPage = () => {
    return (
        <div>
            <AboutCover/>
            <FlatList/>
            <StoryMission/>
            <OurTeam/>
            <Testimonials/> 
        </div>
    );
};

export default AboutPage;