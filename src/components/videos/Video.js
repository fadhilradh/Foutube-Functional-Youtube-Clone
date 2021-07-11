import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import { useEffect, useState } from "react";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";

function Video({ video }) {
    const {
        id,
        snippet: {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails: { medium },
        },
    } = video;

    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const formattedDuration = moment.utc(seconds * 1000).format("mm:ss");

    useEffect(() => {
        const getVideoDetails = async () => {
            const {
                data: { items },
            } = await request("/videos", {
                params: {
                    part: "contentDetails, statistics",
                    id: id,
                },
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        };
        getVideoDetails();
    }, [id]);

    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data: { items },
            } = await request("/channels", {
                params: {
                    part: "snippet",
                    id: channelId,
                },
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
            console.log(items);
        };
        getChannelIcon();
    }, [channelId]);

    return (
        <div className="video">
            <div className="video__top">
                <img src={medium.url} alt="" />
                <span>{formattedDuration}</span>
            </div>
            <div className="video__title">{title}</div>
            <div className="video__details">
                <span>
                    <AiFillEye />
                    {numeral(views).format("0.a")} •{" "}
                    <span>{moment(publishedAt).fromNow()}</span>
                </span>
            </div>
            <div className="video__channel">
                <img src={channelIcon?.url} alt="channel-icon" />
                <p>{channelTitle}</p>
            </div>
        </div>
    );
}

export default Video;
