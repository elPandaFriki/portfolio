import React, { Component } from "react";
import { Divider, styled, Typography } from "@mui/material";
import { Chrono } from "react-chrono";
import School42SiliconValleyLogo from "../../resources/images/42_Silicon_Valley_Logo.png";
import InnerspecLogo from "../../resources/images/Innerspec_Logo.png";
import EOILogo from "../../resources/images/EOI_Logo.jpeg";
import FreeCodeCampLogo from "../../resources/images/FreeCodeCamp_Logo.jpg";
import ULPGCLogo from "../../resources/images/ULPGC_Logo.png";
import UNEDLogo from "../../resources/images/UNED_Logo.jpg";
import { Circle } from "@mui/icons-material";

const Root = styled("div")((props) => {
  const { theme } = props;
  return {
    backgroundColor: theme.palette.primary.backgroundColor,
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Graph = styled("div")((props) => {
  return {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "5px",
    width: "80%",
    height: "80%",
  };
});

const Img = styled("img")((props) => {
  return {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "75px",
    width: "auto",
    objectFit: "scale-down",
    padding: "10px 0px",
  };
});

const Card = styled("div")((props) => {
  return {
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };
});

const Span = styled("span")((props) => {
  return {
    margin: "0px 5px",
    "&:last-child()": {
      marginRight: 0,
    },
    "&:first-child()": {
      marginLeft: 0,
    },
  };
});

const Title = styled("div")((props) => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0px",
  };
});

export default class Trayectory extends Component {
  render() {
    const data = [
      {
        type: "Company",
        title: "Innerspec Technologies",
        timestamp: ["2018", "Today"],
        media: InnerspecLogo,
        content: [""],
      },
      {
        type: "School",
        title: "Universidad Nacional de Educatión a Distancia",
        timestamp: ["2018", "Today"],
        media: UNEDLogo,
        content: [""],
      },
      {
        type: "School",
        title: "Escuela de Organización Industrial",
        timestamp: ["2018"],
        media: EOILogo,
        content: [""],
      },
      {
        type: "School",
        title: "42 Silicon Valley",
        timestamp: ["2017", "2018"],
        media: School42SiliconValleyLogo,
        content: [""],
      },
      {
        type: "School",
        title: "Universidad de Las Palmas de Gran Canaria",
        timestamp: ["2015", "2017"],
        media: ULPGCLogo,
        content: [""],
      },
      {
        type: "School",
        title: "FreeCodeCamp",
        timestamp: ["2013"],
        media: FreeCodeCampLogo,
        content: [""],
      },
    ];
    return (
      <Root>
        <Title>
          <Typography variant={"h2"}>Where have i been?</Typography>
        </Title>
        <Graph>
          <Chrono
            hideControls={true}
            mode={"VERTICAL_ALTERNATING"}
            allowDynamicUpdate={true}
            theme={{
              primary: "black",
              secondary: "white",
              cardBgColor: "white",
              cardForeColor: "black",
              titleColor: "black",
            }}
          >
            <div className="chrono-icons">
              {data.map((card, cardIndex) => {
                const { Icon } = card;
                if (Icon != null) return <Icon key={cardIndex} />;
                return <Circle key={cardIndex} />;
              })}
            </div>
            {data.map((card, cardIndex) => {
              const dates = Array.isArray(card.timestamp)
                ? card.timestamp
                : card.timestamp.split(",");
              const description = Array.isArray(card.content)
                ? card.content
                : card.content.split("\n");
              const parsedDates = dates.map((date) => {
                if (date.toLowerCase() === "today") {
                  const newDate = new Date();
                  return newDate.getFullYear();
                }
                return parseInt(date);
              });
              const duration =
                Math.max(...parsedDates) - Math.min(...parsedDates) + "";
              return (
                <Card key={cardIndex}>
                  <Img src={card.media} alt={card.title} />
                  <Divider>
                    <Typography variant={"subtitle2"}>
                      <Span>{card.type}</Span>
                    </Typography>
                  </Divider>
                  <Typography variant={"subtitle1"}>
                    <Span>{card.title}</Span>
                  </Typography>
                  <Divider>
                    <Typography variant={"subtitle2"}>
                      <Span>
                        {dates.length > 1
                          ? `Duration (${duration} year${
                              duration === "1" ? "" : "s"
                            })`
                          : "Year"}
                      </Span>
                    </Typography>
                  </Divider>
                  <Typography variant={"subtitle1"}>
                    {dates.map((date, dateIndex) => {
                      return (
                        <React.Fragment key={dateIndex}>
                          <Span>{date}</Span>
                          {dateIndex < dates.length - 1 && <Span>-</Span>}
                        </React.Fragment>
                      );
                    })}
                  </Typography>
                  {description.map((content, contentIndex) => {
                    return (
                      <Typography key={contentIndex} variant={"subtitle1"}>
                        {content}
                      </Typography>
                    );
                  })}
                </Card>
              );
            })}
          </Chrono>
        </Graph>
      </Root>
    );
  }
}
