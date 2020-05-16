import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { CLIENT_ID } from "../constants/app-contants";
import FormControl from "@material-ui/core/FormControl";
import { GoogleLogin } from "react-google-login";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { getLoginUser } from "../actions/loginActions";
import { getOrderItemsSystem1 } from "../actions/orderActions";
import { getSideMenu } from "../actions/sideMenuActions";
import { makeStyles } from "@material-ui/core/styles";
import mapbox from "mapbox-gl/dist/mapbox-gl.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginCard: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25%",
  },
  loginText: {
    display: "flex",
    justifyContent: "center",
  },
}));

const dataPie = [
  {
    id: "erlang",
    label: "erlang",
    value: 432,
    color: "hsl(290, 70%, 50%)",
  },
  {
    id: "java",
    label: "java",
    value: 38,
    color: "hsl(4, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 392,
    color: "hsl(283, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 227,
    color: "hsl(237, 70%, 50%)",
  },
  {
    id: "python",
    label: "python",
    value: 349,
    color: "hsl(344, 70%, 50%)",
  },
];

const data = [
  {
    id: "japan",
    color: "hsl(226, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 157,
      },
      {
        x: "helicopter",
        y: 80,
      },
      {
        x: "boat",
        y: 6,
      },
      {
        x: "train",
        y: 298,
      },
      {
        x: "subway",
        y: 299,
      },
      {
        x: "bus",
        y: 140,
      },
      {
        x: "car",
        y: 39,
      },
      {
        x: "moto",
        y: 170,
      },
      {
        x: "bicycle",
        y: 291,
      },
      {
        x: "horse",
        y: 121,
      },
      {
        x: "skateboard",
        y: 76,
      },
      {
        x: "others",
        y: 20,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(60, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 72,
      },
      {
        x: "helicopter",
        y: 26,
      },
      {
        x: "boat",
        y: 62,
      },
      {
        x: "train",
        y: 69,
      },
      {
        x: "subway",
        y: 299,
      },
      {
        x: "bus",
        y: 186,
      },
      {
        x: "car",
        y: 36,
      },
      {
        x: "moto",
        y: 174,
      },
      {
        x: "bicycle",
        y: 241,
      },
      {
        x: "horse",
        y: 88,
      },
      {
        x: "skateboard",
        y: 229,
      },
      {
        x: "others",
        y: 54,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(324, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 96,
      },
      {
        x: "helicopter",
        y: 256,
      },
      {
        x: "boat",
        y: 238,
      },
      {
        x: "train",
        y: 244,
      },
      {
        x: "subway",
        y: 143,
      },
      {
        x: "bus",
        y: 202,
      },
      {
        x: "car",
        y: 43,
      },
      {
        x: "moto",
        y: 7,
      },
      {
        x: "bicycle",
        y: 29,
      },
      {
        x: "horse",
        y: 230,
      },
      {
        x: "skateboard",
        y: 209,
      },
      {
        x: "others",
        y: 32,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(63, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 90,
      },
      {
        x: "helicopter",
        y: 17,
      },
      {
        x: "boat",
        y: 56,
      },
      {
        x: "train",
        y: 117,
      },
      {
        x: "subway",
        y: 82,
      },
      {
        x: "bus",
        y: 157,
      },
      {
        x: "car",
        y: 258,
      },
      {
        x: "moto",
        y: 245,
      },
      {
        x: "bicycle",
        y: 101,
      },
      {
        x: "horse",
        y: 239,
      },
      {
        x: "skateboard",
        y: 218,
      },
      {
        x: "others",
        y: 112,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(114, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 13,
      },
      {
        x: "helicopter",
        y: 263,
      },
      {
        x: "boat",
        y: 291,
      },
      {
        x: "train",
        y: 22,
      },
      {
        x: "subway",
        y: 151,
      },
      {
        x: "bus",
        y: 103,
      },
      {
        x: "car",
        y: 28,
      },
      {
        x: "moto",
        y: 86,
      },
      {
        x: "bicycle",
        y: 100,
      },
      {
        x: "horse",
        y: 55,
      },
      {
        x: "skateboard",
        y: 114,
      },
      {
        x: "others",
        y: 40,
      },
    ],
  },
];

export default function FormPropsTextFields() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="background-body-white">
      <AppBar
        position="static"
        className="appbar"
        style={{ display: "flex", flexDirection: "row" }}
        color="white"
      >
        <Typography variant="h6" color="inherit" className="login-title">
          Developers
        </Typography>
        <Typography variant="h6" color="inherit" className="login-other">
          YOU ARE NOT LOGGED IN
        </Typography>
      </AppBar>
      <div className="div-padding-normal">
        <Button variant="primary" className="dev-dash-connect-btn">
          GET CONTACT
        </Button>
      </div>
      <div className="div-padding-normal flex">
        <div className="flex-equal">
          <div className="github-profile-img"></div>
          <text className="github-name">Shubham Pandey</text>
          <text className="github-link">github.com/shubham.invent</text>
          <text className="github-member-since">Member since 2013 : 7yrs</text>
          <br />
          <text className="github-skillset ">
            Javascript, Typescript, HTML, CSS, Nodejs, Java
          </text>
          <br />
          <Button variant="primary" className="dev-dash-git-login-btn ">
            LOGIN WITH GITHUB
          </Button>
        </div>
        <div className="flex-equal" style={{ maxHeight: "350px" }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            enableArea={true}
            enablePoints={false}
            axisBottom={{
              orient: "bottom",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            colors={{ scheme: "set1" }}
            areaBlendMode="hard-light"
            areaOpacity={0.15}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="flex-equal" style={{ maxHeight: "350px" }}>
          <ResponsivePie
            data={dataPie}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "nivo" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: "color" }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
      <div className="div-padding-normal">
        <hr />
      </div>
      <div className="div-padding-normal">
        <text className>Stackoverflow</text>
        <text className="dev-dash-subtitle">Not Connected</text>
      </div>
      <div className="div-padding-normal">
        <hr />
      </div>
      <div className="div-padding-normal">
        <text className="dev-dash-title">Linkedin</text>
        <text className="dev-dash-subtitle">Not Connected</text>
      </div>
    </div>
  );
}
