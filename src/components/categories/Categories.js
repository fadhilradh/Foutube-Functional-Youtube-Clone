import "./_categories.scss";
import { keywords } from "./keywords";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/videos.action";

function Categories() {
    const [activeKeyword, setActiveKeyword] = useState("");
    const dispatch = useDispatch();

    const handleClick = (keyword) => {
        console.log(keyword);
        setActiveKeyword(keyword);
        dispatch(getVideosByCategory(keyword));
    };

    return (
        <div className="categoriesBar">
            {keywords.map((keyword) => (
                <span
                    onClick={() => handleClick(keyword.keyword)}
                    key={keyword.id}
                    className={activeKeyword === keyword ? "active" : ""}
                >
                    {keyword.keyword}
                </span>
            ))}
        </div>
    );
}

export default Categories;
