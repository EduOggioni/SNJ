import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

type SocialProps = {
  twstyle: string;
  iconsize: number;
};

export function Social(props: SocialProps) {
  return (
    <div className={props.twstyle}>
      <a
        title="instagram"
        target="_blank"
        rel="noopener"
        href="https://www.instagram.com/sonojobguild/">
        <AiFillInstagram size={props.iconsize} className="text-white" />
      </a>
      <a
        title="discord"
        target="_blank"
        rel="noopener"
        href="https://discord.gg/8We4B4jFS6">
        <FaDiscord size={props.iconsize} className="text-white" />
      </a>
      <a
        title="twitch"
        target="_blank"
        rel="noopener"
        href="https://www.twitch.tv/sonojobguild">
        <FaTwitch size={props.iconsize} className="text-white" />
      </a>
    </div>
  );
}
