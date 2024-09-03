 
const TestimonialCard = ({image, image1}) => {
    return (
        <div className="grid grid-cols-2 my-8 gap-6 items-center">
            <div className="text-center bg-[#ECF5FF] rounded-md p-3 md:p-8">
                <div className="rating flex justify-center my-6">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEC84B]"
                        />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]"  defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                </div>
                <p>" The label of security provided by cypherplay is unmatched. I feel confident using my card for both everyday parchases and travel. Its the peace of mind i was looking for. "</p>
                <div className="flex mt-9 justify-center items-center flex-col">
                    <img className="w-24 h-24 rounded-[100%]" src={image} alt="" />
                    <h2 className="font-semibold text-xl">Tony stark</h2>
                    <p>Marketing manager, XYZ</p>
                </div>
            </div>
            <div className="text-center bg-[#ECF5FF] rounded-md p-3 md:p-8">
                <div className="rating flex justify-center my-6">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-[#FEC84B]"
                        />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]"  defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                </div>
                <p>" The label of security provided by cypherplay is unmatched. I feel confident using my card for both everyday parchases and travel. Its the peace of mind i was looking for. "</p>
                <div className="flex mt-9 justify-center items-center flex-col">
                    <img className="w-24 h-24 rounded-[100%]" src={image1} alt="" />
                    <h2 className="font-semibold text-xl">Tony stark</h2>
                    <p>Marketing manager, XYZ</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;