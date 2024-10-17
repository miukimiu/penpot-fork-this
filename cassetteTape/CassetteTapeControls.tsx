import { FC } from "react";

export type CassetteTapeControlsProps = {
  nextTrack: () => void;
  prevTrack: () => void;
  isPlaying: boolean;
  togglePlayPause: () => void;
};

export const CassetteTapeControls: FC<CassetteTapeControlsProps> = ({
  nextTrack,
  prevTrack,
  isPlaying,
  togglePlayPause,
}) => {
  return (
    <>
      <g id="next-btn" fill="#000" onClick={nextTrack}>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea5d">
          <rect
            id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea5d"
            width="78.689"
            height="94.861"
            x="1257"
            y="588"
            fill="#1c2022"
            fillRule="evenodd"
            rx="1"
            ry="1"
            className="0"
          ></rect>
          <g
            id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea5d"
            className="strokes"
          >
            <rect
              width="78.689"
              height="94.861"
              x="1257"
              y="588"
              fill="none"
              fillOpacity="none"
              fillRule="evenodd"
              rx="1"
              ry="1"
              className="0"
            ></rect>
          </g>
        </g>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea5e" fill="#000">
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea60">
            <path
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea60"
              fill="#090c0c"
              fillRule="evenodd"
              d="M1265.197 669.212h61.939v5.991h-61.939z"
              className="0"
            ></path>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea60"
              className="strokes"
            >
              <path
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                d="M1265.197 669.212h61.939v5.991h-61.939z"
                className="0"
              ></path>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea61">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea61"
              width="61.94"
              height="5.991"
              x="1265.197"
              y="660.476"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea61"
              className="strokes"
            >
              <rect
                width="61.94"
                height="5.991"
                x="1265.197"
                y="660.476"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea62">
            <path
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea62"
              fill="#090c0c"
              fillRule="evenodd"
              d="M1265.197 651.74h61.939v5.99h-61.939z"
              className="0"
            ></path>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea62"
              className="strokes"
            >
              <path
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                d="M1265.197 651.74h61.939v5.99h-61.939z"
                className="0"
              ></path>
            </g>
          </g>
        </g>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea5f" fill="#000">
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea63">
            <path
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea63"
              fill="#d8d8d8"
              fillRule="evenodd"
              d="M1307.241 608h-.504c-.417 0-.76.311-.76.728v7.066l-11.647-7.626a.847.847 0 00-.504-.143c-.517 0-.959.436-.959 1.058v3.928l-7.376-4.868a.851.851 0 00-.504-.143c-.517 0-.928.461-.928 1.083v17.804c0 .622.417 1.027.934 1.027.193 0 .336-.075.51-.181l7.364-4.83v3.984c0 .622.449 1.027.965 1.027.193 0 .343-.075.511-.181l11.634-7.607v7.035c0 .417.336.759.76.759h.504c.417 0 .728-.342.728-.759v-18.433a.706.706 0 00-.728-.728z"
              className="0"
            ></path>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea63"
              className="strokes"
            >
              <path
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                d="M1307.241 608h-.504c-.417 0-.76.311-.76.728v7.066l-11.647-7.626a.847.847 0 00-.504-.143c-.517 0-.959.436-.959 1.058v3.928l-7.376-4.868a.851.851 0 00-.504-.143c-.517 0-.928.461-.928 1.083v17.804c0 .622.417 1.027.934 1.027.193 0 .336-.075.51-.181l7.364-4.83v3.984c0 .622.449 1.027.965 1.027.193 0 .343-.075.511-.181l11.634-7.607v7.035c0 .417.336.759.76.759h.504c.417 0 .728-.342.728-.759v-18.433a.706.706 0 00-.728-.728z"
                className="0"
              ></path>
            </g>
          </g>
        </g>
      </g>
      <g id="playPause-btn" fill="#000" onClick={togglePlayPause}>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea65">
          <rect
            id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea65"
            width="78.689"
            height="94.861"
            x="1173"
            y="588"
            fill="#1c2022"
            fillRule="evenodd"
            rx="1"
            ry="1"
            className="0"
          ></rect>
          <g
            id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea65"
            className="strokes"
          >
            <rect
              width="78.689"
              height="94.861"
              x="1173"
              y="588"
              fill="none"
              fillOpacity="none"
              fillRule="evenodd"
              rx="1"
              ry="1"
              className="0"
            ></rect>
          </g>
        </g>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea66" fill="#000">
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea69">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea69"
              width="62.295"
              height="5.858"
              x="1181.197"
              y="668.826"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea69"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1181.197"
                y="668.826"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea6a">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea6a"
              width="62.295"
              height="5.858"
              x="1181.197"
              y="660.283"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea6a"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1181.197"
                y="660.283"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea6b">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea6b"
              width="62.295"
              height="5.858"
              x="1181.197"
              y="651.741"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea6b"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1181.197"
                y="651.741"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
        </g>
        {!isPlaying ? (
          <g id="playState" fill="#000">
            <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea6c">
              <path
                id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea6c"
                fill="#91fadb"
                fillRule="evenodd"
                d="M1220.239 617.963l-15.199-8.849c-.624-.363-1.404.094-1.404.818v17.715c0 .725.78 1.181 1.404.819l15.199-8.849c.624-.378.624-1.292 0-1.654z"
                className="0"
              ></path>
              <g
                id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea6c"
                className="strokes"
              >
                <path
                  fill="none"
                  fillOpacity="none"
                  fillRule="evenodd"
                  d="M1220.239 617.963l-15.199-8.849c-.624-.363-1.404.094-1.404.818v17.715c0 .725.78 1.181 1.404.819l15.199-8.849c.624-.378.624-1.292 0-1.654z"
                  className="0"
                ></path>
              </g>
            </g>
          </g>
        ) : (
          <g id="pauseState" fill="#000">
            <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea6d">
              <path
                id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea6d"
                fill="#d8d8d8"
                fillRule="evenodd"
                d="M1221.033 627.984c.55 0 1-.432 1-.96v-18c0-.528-.45-.96-1-.96h-6c-.55 0-1 .432-1 .96v18c0 .528.45.96 1 .96h6z"
                className="0"
              ></path>
              <g
                id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea6d"
                className="strokes"
              >
                <path
                  fill="none"
                  fillOpacity="none"
                  fillRule="evenodd"
                  d="M1221.033 627.984c.55 0 1-.432 1-.96v-18c0-.528-.45-.96-1-.96h-6c-.55 0-1 .432-1 .96v18c0 .528.45.96 1 .96h6z"
                  className="0"
                ></path>
              </g>
            </g>
            <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea6e">
              <path
                id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea6e"
                fill="#d8d8d8"
                fillRule="evenodd"
                d="M1209 627.984c.55 0 1-.432 1-.96v-18c0-.528-.45-.96-1-.96h-6c-.55 0-1 .432-1 .96v18c0 .528.45.96 1 .96h6z"
                className="0"
              ></path>
              <g
                id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea6e"
                className="strokes"
              >
                <path
                  fill="none"
                  fillOpacity="none"
                  fillRule="evenodd"
                  d="M1209 627.984c.55 0 1-.432 1-.96v-18c0-.528-.45-.96-1-.96h-6c-.55 0-1 .432-1 .96v18c0 .528.45.96 1 .96h6z"
                  className="0"
                ></path>
              </g>
            </g>
          </g>
        )}
      </g>
      <g id="previous-btn" fill="#000" onClick={prevTrack}>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea70">
          <rect
            id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea70"
            width="78.689"
            height="94.861"
            x="1088"
            y="588"
            fill="#1c2022"
            fillRule="evenodd"
            rx="1"
            ry="1"
            className="0"
          ></rect>
          <g
            id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea70"
            className="strokes"
          >
            <rect
              width="78.689"
              height="94.861"
              x="1088"
              y="588"
              fill="none"
              fillOpacity="none"
              fillRule="evenodd"
              rx="1"
              ry="1"
              className="0"
            ></rect>
          </g>
        </g>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea71" fill="#000">
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea73">
            <path
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea73"
              fill="#d8d8d8"
              fillRule="evenodd"
              d="M1115.717 608h.496c.411 0 .748.306.748.717v6.955l11.466-7.507a.836.836 0 01.496-.14c.509 0 .944.428.944 1.041v3.867l7.262-4.792a.825.825 0 01.496-.141c.509 0 .913.453.913 1.066v17.527c0 .613-.41 1.011-.919 1.011-.19 0-.331-.074-.503-.178l-7.249-4.755v3.922c0 .613-.441 1.011-.95 1.011-.19 0-.337-.074-.503-.178l-11.453-7.488v6.924a.747.747 0 01-.748.748h-.496c-.411 0-.717-.337-.717-.748v-18.145c0-.411.3-.717.717-.717z"
              className="0"
            ></path>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea73"
              className="strokes"
            >
              <path
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                d="M1115.717 608h.496c.411 0 .748.306.748.717v6.955l11.466-7.507a.836.836 0 01.496-.14c.509 0 .944.428.944 1.041v3.867l7.262-4.792a.825.825 0 01.496-.141c.509 0 .913.453.913 1.066v17.527c0 .613-.41 1.011-.919 1.011-.19 0-.331-.074-.503-.178l-7.249-4.755v3.922c0 .613-.441 1.011-.95 1.011-.19 0-.337-.074-.503-.178l-11.453-7.488v6.924a.747.747 0 01-.748.748h-.496c-.411 0-.717-.337-.717-.748v-18.145c0-.411.3-.717.717-.717z"
                className="0"
              ></path>
            </g>
          </g>
        </g>
        <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea72" fill="#000">
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea74">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea74"
              width="62.295"
              height="5.858"
              x="1096.197"
              y="668.826"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea74"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1096.197"
                y="668.826"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea75">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea75"
              width="62.295"
              height="5.858"
              x="1096.197"
              y="660.283"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea75"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1096.197"
                y="660.283"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
          <g id="shape-5ed15ab4-cca9-80f3-8002-b866dfc6ea76">
            <rect
              id="fills-5ed15ab4-cca9-80f3-8002-b866dfc6ea76"
              width="62.295"
              height="5.858"
              x="1096.197"
              y="651.741"
              fill="#090c0c"
              fillRule="evenodd"
              rx="0"
              ry="0"
              className="0"
            ></rect>
            <g
              id="strokes-5ed15ab4-cca9-80f3-8002-b866dfc6ea76"
              className="strokes"
            >
              <rect
                width="62.295"
                height="5.858"
                x="1096.197"
                y="651.741"
                fill="none"
                fillOpacity="none"
                fillRule="evenodd"
                rx="0"
                ry="0"
                className="0"
              ></rect>
            </g>
          </g>
        </g>
      </g>
    </>
  );
};
