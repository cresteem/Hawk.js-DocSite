import HawkLogo from "../utils/hawk-logo";
import Bing from "./universe-icons/bing";
import DuckDuckGo from "./universe-icons/duckduckgo";
import Google from "./universe-icons/google";
import Naver from "./universe-icons/naver";
import Seznam from "./universe-icons/seznam";
import Yahoo from "./universe-icons/yahoo";
import Yandex from "./universe-icons/yandex";
import Yep from "./universe-icons/yep";
export default function Universe() {
  return (
    <div className="universe">
      <div className="orbit yep"></div>
      <div className="orbit seznam"></div>
      <div className="orbit naver"></div>
      <div className="orbit yandex"></div>
      <div className="orbit ddgo"></div>
      <div className="orbit yahoo"></div>
      <div className="orbit bing"></div>
      <div className="orbit google"></div>

      <HawkLogo className="body hawk-js text-primary" />

      <Yep className="body yep" />
      <Seznam className="body seznam" />
      <Naver className="body naver" />
      <Yandex className="body yandex" />
      <DuckDuckGo className="body ddgo" />
      <Yahoo className="body yahoo" />
      <Bing className="body bing" />
      <Google className="body google" />
    </div>
  );
}
