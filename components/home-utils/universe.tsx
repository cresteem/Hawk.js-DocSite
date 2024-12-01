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
      {/*  <div className="orbit stars">
        <div
          className="star"
          style={{ "--j": 0, "--y": 0.1 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 1, "--y": 0.5 } as React.CSSProperties}
        ></div>

        <div
          className="star"
          style={{ "--j": 2, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 3, "--y": 0.1 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 4, "--y": 0.6 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 5, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 6, "--y": 0.9 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 7, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 8, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 9, "--y": 0.5 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 10, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 11, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 12, "--y": 0.7 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 13, "--y": 0.8 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 14, "--y": 0.1 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 15, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 16, "--y": 0.9 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 17, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 18, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 19, "--y": 0.5 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 20, "--y": 0.9 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 21, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 22, "--y": 0.6 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 23, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 24, "--y": 0.8 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 25, "--y": 0.7 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 26, "--y": 0.1 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 27, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 28, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 29, "--y": 0.7 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 30, "--y": 0.8 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 31, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 32, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 33, "--y": 0.7 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 34, "--y": 0.8 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 35, "--y": 0.1 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 36, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 37, "--y": 0.9 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 38, "--y": 0.4 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 39, "--y": 0.3 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 40, "--y": 0.2 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 41, "--y": 0.8 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 42, "--y": 0.7 } as React.CSSProperties}
        ></div>
        <div
          className="star"
          style={{ "--j": 43, "--y": 0.1 } as React.CSSProperties}
        ></div>
      </div> */}
      <div className="orbit stars"></div>

      <HawkLogo className="body-container hawk-js text-primary" />

      <Yep className="body-container yep" />

      <Seznam className="body-container seznam" />

      <Naver className="body naver" />

      <Yandex className="body yandex" />

      <DuckDuckGo className="body-container ddgo" />
      <Yahoo className="body yahoo" />

      <Bing className="body-container bing" />

      <Google className="body-container google" />
    </div>
  );
}
